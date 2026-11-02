import React,{ useRef,useState,useEffect } from 'react'
import './ArtGallery.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
const artPieces = [
  { id: 1, title: "Character Concept A", img: "/assets/art1.jpg" },
  { id: 2, title: "Webtoon Panel 04", img: "/assets/art2.jpg" },
  { id: 3, title: "Motion Storyboard", img: "/assets/art3.jpg" },
  { id: 4, title: "Lighting & Shading", img: "/assets/art4.jpg" },
  { id: 5, title: "Rigged Asset Sketch", img: "/assets/art5.jpg" },
  { id: 6, title: "Dark Alternative Pop", img: "/assets/art6.jpg" },
];

const ArtGallery = () => {
    const ArtRef = useRef(null);
    const [displayedArt, setDisplayedArt] = useState(artPieces.slice(0, 5))

    useGSAP(() => {
    gsap.to(ArtRef.current,  
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ArtRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
    const shuffled = [...artPieces].sort(() => 0.5 - Math.random())

      gsap.to(".art-card", {
        scale: 0.95,
        opacity: 0.4,
        duration: 0.3,
        onComplete: () => {
          setDisplayedArt(shuffled.slice(0, 5))
          gsap.to(".art-card", { scale: 1, opacity: 1, duration: 0.3 })
        }
      })
    }, 6000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <div id='ArtContainer' > 
    <div id='ArtGallery' className="art-gallery-section" ref={ArtRef}>
        <div className="headlineart">ArtWorks</div>
        <br></br>
        <br></br>
           <div className="art-grid">
        {displayedArt.map((art, index) => (
          <div key={`${art.id}-${index}`} className={`art-card card-pos-${index + 1}`}>
            <div className="art-image-wrapper">
              <span className="art-title">{art.title}</span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    </div>
  )
}

export default ArtGallery
