import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from "framer-motion";
import About from './component/About.jsx';
import DarkVeil from './component/DarkVeil.jsx';
import RotatingRoleText from './component/RotatingRoleText.jsx';
import Navbar from './component/Navbar.jsx';
import Projects from './component/Projects.jsx';
import selfImg from "./assets/self.png";
import Skills from './component/Skills.jsx';
import Contact from './component/Contact.jsx';
import Footer from './component/Footer.jsx';
import './App.css'
import 'viewerjs/dist/viewer.css';

function App() {
  const [count, setCount] = useState(0);

  const [currView, setCurrView] = useState("Home");
  const Projectsref = useRef(null);
  const Homeref = useRef(null);
  const Skillsref = useRef(null);
  const Contactref = useRef(null);
  const Aboutref = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

   useEffect(() => {
    const options = {
      root: null,
      threshold: 0.6,
      rootMargin: "-40px 0px 0px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrView(entry.target.dataset.section);
        }
      });
    }, options);
     const sections = [Homeref,Aboutref, Projectsref, Skillsref, Contactref];

    sections.forEach((ref) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);


  return (

    <>
      <Navbar
       highlight={currView}
          onHome={() => {
            scrollTo(Homeref);
          }}
          onAbout={() => {
            scrollTo(Aboutref);
          }}
          onProjects={() => {
            scrollTo(Projectsref);
          }}
          onSkills={() => {
            scrollTo(Skillsref);
          }}
          onContact={() => {
            scrollTo(Contactref);
          }}

      />
      <div className='w-full h-full fixed -z-1' >

        <DarkVeil
          hueShift={245}
          noiseIntensity={0.16}
          scanlineIntensity={0.28}
          scanlineFrequency={4.9}
          warpAmount={4.8}
          
        />
        {/* <div className='h-full w-full bg-black'></div> */}
      </div>
      <div 
      
      ref={Homeref}
      data-section="Home"

      id="home" className='w-full h-screen flex flex-col-reverse md:flex-row justify-around items-center scroll-mt-[80px] md:snap-start' style={{paddingTop:"120px"}}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='h-70 md:h-80 w-[90%] md:w-130 z-10 relative md:top-10'
          style={{
             color: "white", fontSize: "60px",
            background: "rgba(32, 32, 32, 0.15)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)"
          }}>

          <RotatingRoleText />
        </motion.div>
        <div className='flex justify-center items-center'>
          <motion.img
            src={selfImg}
            alt="Self"
            className='w-[70%] md:w-100'
            style={{
               zindex: "10", filter: "drop-shadow(0 0 50px rgba(0, 204, 255, 0.6))"
            }}
            animate={{
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </div>
      </div>
      <div id="aboutme" 
       ref={Aboutref}
        className="scroll-mt-[80px] md:snap-start" data-section="About"
      >
        <About />
      </div>
      <div id="projects"
       ref={Projectsref}
        className="scroll-mt-[80px] md:snap-start" data-section="Projects"
      >
      <Projects/>
      </div>
      <div id="skills"
      ref={Skillsref} className="scroll-mt-[80px] md:snap-start" data-section="Skills"
      >
          <Skills/>
      </div>
      <div id="contact"
      ref={Contactref} className="scroll-mt-[80px] md:snap-start" data-section="Contact"
      >
        <Contact/>
      </div>
      <div id="footer" className="md:snap-start">
        <Footer/>
      </div>
  
 
    </>
  )
}

export default App
