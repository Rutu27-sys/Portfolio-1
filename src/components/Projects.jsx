import React from 'react'
import gsap from 'gsap'
import { useGSAP} from '@gsap/react'
import './Projects.css'

const Projects = () => {
  return (
    <div id='Projects' className='Projects'>
      <div className="projectsContainer">

      <div className="projectList">
      <span className="projecttitle">[Title]</span>
      <div className="projectsCard" id='projectsCard1'>
        <div className="projectdesc">
          <p>[Description]</p>
        </div>
      </div>
      <a href="#link" className="projectlink">[link]</a>
    </div>
      
      <div className="projectList">
      <span className="projecttitle">[Title]</span>
      <div className="projectsCard" id='projectsCard2'>
        <div className="projectdesc">
          <p>[Description]</p>
        </div>
      </div>
      <a href="#link" className="projectlink">[link]</a>
    </div>

    <div className="projectList">
      <span className="projecttitle">[Title]</span>
      <div className="projectsCard" id='projectsCard3'>
        <div className="projectdesc">
          <p>[Description]</p>
        </div>
      </div>
      <a href="#link" className="projectlink">[link]</a>
    </div>
    <div className="projectList">
      <span className="projecttitle">[Title]</span>
      <div className="projectsCard" id='projectsCard4'>
        <div className="projectdesc">
          <p>[Description]</p>
        </div>
      </div>
      <a href="#link" className="projectlink">[link]</a>
    </div>

    <div className="projectList">
      <span className="projecttitle">[Title]</span>
      <div className="projectsCard" id='projectsCard5'>
        <div className="projectdesc">
          <p>[Description]</p>
        </div>
      </div>
      <a href="#link" className="projectlink">[link]</a>
    </div>

    <div className="projectList">
      <span className="projecttitle">[Title]</span>
      <div className="projectsCard" id='projectsCard6'>
        <div className="projectdesc">
          <p>[Description]</p>
        </div>
      </div>
      <a href="#link" className="projectlink">[link]</a>
    </div>
      </div>
    </div>
  )
}

export default Projects
