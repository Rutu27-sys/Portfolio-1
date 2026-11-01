import React,{useRef,useState,useEffect}  from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import './Home.css'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Navbar from './Navbar'
import SunflowerImg from '../assets/Sunflower.png'
import ProfileImg from '../assets/Sunflower.png'
import { ScrollTrigger } from 'gsap/all'
import { link as Srolllink} from 'react-scroll'

gsap.registerPlugin(SplitText,useGSAP,ScrollTrigger)
const words = ["Scroll ","Explore ", "Dive ", "Peek ","Wander "]

const Home = () => {

  const headlineRef = useRef(null);
  const scrollRef = useRef(null);
  const sunflowerRef = useRef(null);
  const ProfileRef = useRef(null);
  const cardRef = useRef(null);
  const [isword, setIsword] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsword((prevIndex) => (prevIndex + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {

  const split = new SplitText(headlineRef.current, { type: "chars" })

    split.chars.forEach((char, index) => {
      const randomX = gsap.utils.random(-300, 300) 
      const randomY = gsap.utils.random(-400, 400) 
      const randomRotation = gsap.utils.random(-180, 180) 

      gsap.from(char, {
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        opacity: 0,
        color: "#F59E08",
        duration: 2.2,
        delay: index * 0.07, 
        ease: "back.out(1.7)"
      })
    })

  }, [])

  useGSAP(() => {
    gsap.fromTo(scrollRef.current, 
      { 
        y: 50, 
        opacity: 0 ,
        color: "#FAF3E0"
      },
      { 
        y: 0, 
        opacity: 1, 
        color: "#F59E08",
        duration: 0.6, 
        ease: "power2.out" 
      }
    )
  }, { dependencies: [isword] })

  useGSAP(() =>{
    gsap.from(sunflowerRef.current,
      {
        rotation: 360,
        duration:3.6,
        repeat:-1,
        ease:"none" 
      }
    )
  })


  return (
    <div className="app">

    <div className='Home' id='Home'>
           <Navbar />

    <div className="headline">
                <h1 ref={headlineRef}> Portfolio </h1>
                <h3 id="scroll" >
                  <span ref={scrollRef}>
                     {words[isword]}
                  </span>{" "}
                  through </h3>
                <h3 id="portfolio"> my portfolio </h3>
    </div>
    
    </div>
    <div className="card" ref={cardRef}>
      <img id="sunflower" src={SunflowerImg} ref={sunflowerRef} alt="Sunflower" />
    </div>
    <div > <img id="Profile" src={ProfileImg} ref={ProfileRef} alt="ProfilePic" /> </div>
       <About cardRef={cardRef} sunflowerRef={sunflowerRef}/>
       <Projects />
   
    
    
    </div>
  )



}

export default Home
