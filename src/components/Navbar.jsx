import React from 'react'
import {Link} from 'react-scroll'
import './Home.css'
const Navbar = () => {

  return (
    <div className="nav">

      <Link
      to="Home"
      spy={true}
      smooth={true}
      duration={500}
      className="tag"
      activeClass="active">
      Home 
      </Link>

      <div className="navright">
        <Link 
        to="About" 
        spy={true} 
        smooth={true} 
        duration={500} 
        className="tag" 
        activeClass="active"
        >
            About
        </Link>
        <Link to="Projects" spy={true} smooth={true} duration={500} className="tag" activeClass="active">Projects</Link>
        <Link to="ArtGallery" spy={true} smooth={true} duration={500} className="tag" activeClass="active">Art Gallery</Link>
        <Link to="Contact" spy={true} smooth={true} duration={500} className="tag" activeClass="active">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar