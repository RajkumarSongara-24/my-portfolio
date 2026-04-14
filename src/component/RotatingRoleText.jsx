import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import CV from "../assets/CV.pdf";

const roles = [
  "Rajkumar Songara",
  "Web Developer",
  "Graphics Designer",
  "Learner",
  "Creative Thinker",
  "Video Editor",
];

export default function RotatingRoleText() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setShow(true);
      }, 300);
    }, 2000); // change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex flex-col gap-5 md:gap-10 justify-between " style={{padding:"20px"}}>
      <div className="text-left">
        <span>Hello, I&apos;m </span>
      <br />
      <span
        style={{
          color: "red",
          display: "inline-block",
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0px)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          fontFamily: "'Raleway', sans-serif",
        }}
        key={index}
        className="animate-fadeUp text-white"
      >
        {roles[index]}
      </span>
      </div>
      
      <hr
        style={{
          color: "red",
          width: "90%",
          
        }}
      />
      <div className="h-full w-full flex flex-col md:flex-row gap-5 items-start justify-center">
        <a
      className={`max-w-55 w-${hover?"55":"50"} h-15 text-center text-nowrap `}
        href={CV}
        
        download=""
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          
          gap: "10px",
          padding: "14px 28px",
          borderRadius: "999px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 0, 0, 0.25)",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "500",
          textDecoration: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            transform: hover ? "translateX(-4px)" : "translateX(0)",
            transition: "transform 0.3s ease",
            fontSize: "20px",
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          {/* <button style={{fontSize:"20px", position:"absolute", top:"300px"}}>Download CV</button> */}
          Download CV
        </span>

       

        <span
          style={{
            opacity: hover ? 1 : 0,
            display: hover ? "inline" : "none",
            transform: hover ? "translateX(0)" : "translateX(-8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            fontSize: "15px",
            color: "red",
          }}

          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2em"
            height="2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
            ></path>
          </svg>
        </span>
      </a>

       <div className="h-full w-full flex gap-4 md:text-4xl items-center" style={{paddingLeft:"20px"}}>
            <a href="https://github.com/RajkumarSongara-24" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rajkumar-songara-2aba03378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a>
            <a href="https://www.instagram.com/_rajkumarsongara_?igsh=bDg5bDdkN3lmNXZj" target="_blank"><FaInstagram /></a>
          </div>
      </div>
    </div>
  );
}
