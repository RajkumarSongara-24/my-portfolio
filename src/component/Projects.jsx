import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectToggle from './ProjectToggel';
import WebProjects from './WebProjects';
import GraphicProjects from './GraphicProjects';

const Projects = () => {
const [type, setType] = useState("web");
  return (
    <div className='w-full flex flex-col items-center gap-10'
    style={{marginTop:"100px"}}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          color: "red",
          alignContent: "center",
          alignItems: "center",
          // fontSize: "80px",
          fontFamily: "'Raleway', sans-serif",
        }}
        className='text-4xl font-semibold md:text-[70px]'
        >Projects</motion.h1>
        <ProjectToggle onChange={setType}/>
        {type === "web" && <WebProjects />}
      {type === "graphic" && <GraphicProjects />}
        
    </div>
  )
}

export default Projects;
