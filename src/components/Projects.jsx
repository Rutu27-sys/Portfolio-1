import React,{useRef,useState}  from 'react'
import gsap from 'gsap'
import { useGSAP} from '@gsap/react'
import './Projects.css'

const projectsData = [
  { id: 1, title: "Mumbai Smart Tourism", desc: "Java & MongoDB backend tourism portal.", link: "#" },
  { id: 2, title: "Feed The Cat Game", desc: "Interactive 2D cozy browser game using React & GSAP.", link: "#" },
  { id: 3, title: "Webtoon Comic UI", desc: "Semi-realistic manhwa style digital layout showcase.", link: "#" },
  { id: 4, title: "Portfolio Concept", desc: "Single-page responsive site with typewriter effects.", link: "#" },
  { id: 5, title: "Student Reg System", desc: "Dynamic HTML, PHP, and MySQL registration portal.", link: "#" },
  { id: 6, title: "Interactive UI Motion", desc: "GSAP ScrollTrigger and TextPlugin experiments.", link: "#" },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef([]);
  const getIndex = (offset) => {
    return (currentIndex + offset + projectsData.length) % projectsData.length;
  };

  const prevIndex = getIndex(-1);
  const activeIndex = getIndex(0);
  const nextIndex = getIndex(1);

  useGSAP(() => {
    gsap.fromTo(".project-card-center", 
      { scale: 0.9, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <div id='Projects' className='Projects'>
      <div className="headlineprojects" id="designprojects"> Designs</div>
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
      
      <button className="nav-arrow left-arrow" onClick={handlePrev}>⏮</button>
        <div className="headlineprojects" id="techprojects"> Tech Projects </div>  
      <div className="carousel-container">
        
        <div className="side-card">
          <h4>{projectsData[prevIndex].title}</h4>
        </div>

        
        <div className="projectsCard project-card-center">
          <h2>{projectsData[activeIndex].title}</h2>
          <p>{projectsData[activeIndex].desc}</p>
          <a href={projectsData[activeIndex].link} target="_blank" rel="noreferrer">[visit link]</a>
        </div>

        <div className="side-card">
          <h4>{projectsData[nextIndex].title}</h4>
        </div>

      </div>

      
      <button className="nav-arrow right-arrow" onClick={handleNext}>⏭</button>
      
      </div>

    </div>
  )
}

export default Projects
