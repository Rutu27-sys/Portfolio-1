import React from 'react'
import './About.css'
import gsap from 'gsap'
import { useGSAP} from '@gsap/react'
import _ScrollTrigger, { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(useGSAP,ScrollTrigger,TextPlugin)

const About = ({cardRef, sunflowerRef}) => {

  const headline2Ref = React.useRef(null);

    useGSAP(()=>{
       gsap.to(cardRef.current,{
        scrollTrigger: {
          trigger:"#About",
          start:"20% 100%",
          end:" 50% 50%",
          scrub:true,
        },
        y:840,
        left: 100,
        rotate : 180,
        ease:"none" 
       })
    })
    useGSAP(()=>{
      gsap.to(sunflowerRef.current,{
        scrollTrigger: {
          trigger:"#About",
          start:"20% 100%",
          end:" 50% 50%",
          scrub:true,
        },
        y:1440,
        left: 475,
        rotate : 360,
        ease:"none" 
       })
    })

    useGSAP(()=>{
      gsap.to('#aboutme', {
       text : "Hi, I'm Rutuja! <br>I'm a Computer Engineering student and Creative Developer who loves bringing ideas to life through code, design, and animation. <br>I build interactive web experiences with React and JavaScript,combining frontend development with my passion for digital art and visual storytelling.<br>I enjoy experimenting with motion, creating original visuals, and turning concepts into experiences people can explore. <br>I'm always learning, building, and looking for opportunities to collaborate, solve real problems, and grow through hands-on work. <br>Currently exploring: Creative web development, interactive UI, and animation. <br>Open to: Development internships and creative freelance projects.",
       duration: 6, 
       delay: 0.5,
       ease :  'none',
       scrollTrigger: {
       trigger: "#About",     
       start: "top 70%",      
       toggleActions: "play none none reverse"
    }
})
    })

    useGSAP(()=>{
      gsap.to('#descrip', {
       text : "Name : Rutuja Ghadi <br>Role Title : Creative Developer and Digital Artist <br>Core Focus : React , Animations , Art <br>Skills : React, GSAP , Java ,Python , SQL , UI design ,<br>Illustrations  <br>Status Badge : Open for Internships and Projects",
       duration: 6, 
       delay: 0.5,
       ease :  'none',
       scrollTrigger: {
       trigger: "#About",     
       start: "top 70%",      
       toggleActions: "play none none reverse"
    }
})
    })

  return (
    <div id='About'>
      <div className="box2"> Id Card </div>
      <div id="borderbox"> border</div>
      <div id="descrip"> </div>
       <div  ref={cardRef} className="box"> 
       </div>
       <h1 ref={headline2Ref} id="headline2"> About Me </h1>
       <p id="aboutme" >
       </p>
    </div>
  )
}

export default About
