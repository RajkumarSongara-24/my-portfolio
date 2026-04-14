import React from 'react'
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiCanva,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const skillsLayer1 = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
];

const skillsLayer2 = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "SQL", icon: <SiMysql /> },
];

const skillsLayer3 = [
  { name: "Canva", icon: <SiCanva /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
];

// TRUE infinite marquee using pixel transform
// PARALLEL infinite marquee (all layers move same direction)
const MarqueeLayer = ({ items, duration }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        margin: "26px 0",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "18px",
        }}
        animate={{ x: [0, -1000] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 28px",
              borderRadius: "999px",
              backdropFilter: "blur(14px)",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              whiteSpace: "nowrap",
              color: "#fff",
              fontSize: "16px",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "22px" }}>{item.icon}</span>
            {item.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
const Skills = () => {
  return (
    <div 
    
    className='w-full h-screen flex flex-col items-center justify-center gap-20'
    >
      <div></div>
      <div className='flex flex-col items-center'>
        <motion.h1
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          color: "red",
          alignContent: "center",
          alignItems: "center",

          // width: "200px",
        
          // fontSize: "70px",
          fontFamily: "'Raleway', sans-serif",
        }}
        className='md:text-[70px] text-[60px] font-semibold'
        >Skills</motion.h1>

        <h2 
        style={{
          color: "white",
          textAlign:"center",
         
          
          
          
          fontFamily: "'Raleway', sans-serif",
        }}
        className='text-18px md:text-[20px]'
        >Technology and Software I Know</h2>
      </div>
      <div
        style={{
          
          color: "red",
          alignContent: "center",
          alignItems: "center",
         
          // width: "100vw",
        
          fontSize: "100px",
          
          textAlign: "center",
          fontFamily: "Raleway, sans-serif",
        }}
        className='w-full'
      >
        {/* <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>My Skills</h1>
      <p style={{ opacity: 0.7, marginBottom: "60px" }}>
        Technologies I work with
      </p> */}

        <MarqueeLayer items={skillsLayer1} duration={20} />
        <MarqueeLayer items={skillsLayer2} duration={28} />
        <MarqueeLayer items={skillsLayer3} duration={36} />
      </div>
      <div className='h-10 md:hidden'></div>
    </div>
  )
}

export default Skills;
