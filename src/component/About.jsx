import React from "react";
import ScrollReveal from "./ScrollReveal";
import { color, motion } from "framer-motion";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div className="h-full w-full flex flex-col justify-around items-center gap-10" style={{marginTop:"80px"}}>
      {/* <div style={{zIndex:"500", width:"100%", height:"400px", position:"absolute", backgroundColor:"white"}}> */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          color: "red",
          alignContent: "center",
          alignItems: "center",
          fontFamily: "'Raleway', sans-serif",
          marginTop:"100px"
        }}
        className="text-4xl md:text-[70px] font-semibold"

      >
        About Me
      </motion.h1>
      {/* </div> */}
      <div className="w-full flex flex-nowrap flex-row-reverse justify-around ">
        <div
        className="w-[90%] md:h-120 md:w-200"
        style={{
          padding: "10px",
          zindex: "10",
          color: "white",
          background: "rgba(32, 32, 32, 0.15)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        }}
      >
         <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          I’m Rajkumar Songara, a creative graphic designer and web developer
          with a passion for building visually appealing and user-friendly
          digital experiences. I enjoy turning ideas into meaningful designs and
          interactive websites by blending creativity with clean, functional
          code. Always curious and eager to learn, I continuously explore new
          design trends and web technologies to deliver impactful and engaging
          solutions.
       
        </ScrollReveal>
      </div>
      <motion.img
        src={aboutImg}
        alt="About"
        className="z-10 h-130 relative bottom-10 hidden md:block"
        style={{
          
          filter: "drop-shadow(0 0 50px rgba(0, 204, 255, 0.6))",
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      </div>
    </div>
  );
};

export default About;
