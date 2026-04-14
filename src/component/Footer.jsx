import React from 'react'
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"

const footer = () => {
  return (
    <div className='' style={{marginTop:"100px"}}>
      <footer className="footer">
      <div className="footer-top">

        {/* Left */}
        <div className="footer-col">
          <h1 className='text-3xl'>Thank You For Stopping By ! </h1>
          <h3 className='text-xl'>Rajkumar Songara</h3>
          <p>
            Graphic Designer & Web Developer  
            crafting clean visuals and interactive experiences.
          </p>
        </div>

        {/* Center */}
        {/* <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div> */}

        {/* Right */}
        <div className="footer-col hidden md:block">
          <h4>Contact</h4>

          <a href="mailto:rajsongara24@gmail.com" className="footer-item">
            <MdEmail />
            <span>rajsongara24@gmail.com</span>
          </a>

          <a href="tel:+919111577184" className="footer-item">
            <FaPhoneAlt />
            <span>+91 91115 77184</span>
          </a>

          <a
            href="https://www.google.com/maps/place/Nihal+Nagar,+Dhar,+Madhya+Pradesh+454001/@22.6121343,75.3073816,18z/data=!4m6!3m5!1s0x396235db02d881e1:0x72bb8f62fac71db6!8m2!3d22.6105788!4d75.3076904!16s%2Fg%2F1ptx2zp0h?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item"
          >
            <MdLocationOn />
            <span>182, Nihal Nagar Colony, Ratlam Road, Dhar - 454001, M.P.</span>
          </a>

          
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Rajkumar Songara. All rights reserved.
      </div>
    </footer>

    </div>
  )
}

export default footer;
