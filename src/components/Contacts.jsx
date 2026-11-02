import React,{ useRef,useState,useEffect } from 'react'
import './Contacts.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Contacts = () => {

     useGSAP(()=>{
      gsap.to('#Paragraph', {
       text : "<span class='orange-line'>Every good idea starts somewhere.</span><br>From interactive websites to creative experiments, I'm always up for building <br>something interesting.<br> <br>Have an idea, an opportunity, or a project in mind? <br>I'd love to hear about it.",
       duration: 6, 
       delay: 0.5,
       ease :  'none',
       opacity: 1,
       scrollTrigger: {
       trigger: "#Contacts",     
       start: "top 70%",      
       toggleActions: "play none none reverse",
    }
})
})

  return (
    <div id='Contacts' className='Contacts'>
        <div id="Paragraph"> </div>
        <div className="contactsbg">
            <div className="contactcard">
          <h3>Contact me !</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="What's on your mind ?" rows="3"></textarea>
          </form>
        </div>

        <div className="contactfooter">
          <a href="https://github.com" target="_blank" rel="noreferrer">Github</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">Linkdin</a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>
        </div>
        
    </div>
  )
}

export default Contacts
