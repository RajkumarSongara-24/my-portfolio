import { color, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8c34e9f2-8b01-4d98-87fe-203bcf91f55b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <div
      style={styles.container}
      className="flex flex-col items-center justify-center gap-20 h-300 md:h-240"
      
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={styles.heading}
        className="md:text-[60px] text-[50px] font-semibold"
      >
        Contact Me
      </motion.div>
      {/* <div className="md:hidden"></div> */}
      <div
        className="flex flex-col md:flex-row justify-center items-center border-0 md:border-1 border-white gap-10 rounded-4xl"
        style={{ padding: "10px 0px" }}
      >
        <div
          style={styles.left}
          className="flex w-full justify-center items-center "
        >
          <form onSubmit={onSubmit} 
          className="flex flex-col items-start gap-10"
          style={{paddingLeft:"20px"}}
          >
            <div className="flex flex-col">
              <label style={styles.label}>Your Name :</label>
           
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              style={styles.input}
              className="w-75 md:w-100"
              required
            />
            </div>
            
            <div className="flex flex-col">
              <label style={styles.label}>Your E-Mail :</label>
            
            <input
              type="email"
              name="email"
              placeholder="Enter your Mail"
              style={styles.input}
              className="w-75 md:w-100"
              required
            />
            </div>
            
            <div className="flex flex-col">
              <label style={styles.label}>Message :</label>
            
            <textarea
              name="message"
              placeholder="Type Your Message"
              style={styles.inputTxt}
              className="w-75 md:w-100"
              required
            ></textarea>
            </div>
            
            <button type="submit" style={styles.btn}
            className="w-75 md:w-100"
            >
              Submit
            </button>
            <motion.p
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={styles.result}
            >
              {result}
            </motion.p>
          </form>
        </div>
        <hr className="md:h-[90%] md:w-[0.5px] h-[0.5px] w-[90%] bg-white" />
        <div
          // style={styles.right}
          className="flex md:w-[40%] w-[80%] flex-col justify-center items-start gap-10 "
        >
          <a href="mailto:rajsongara24@gmail.com" style={styles.contact}
          className="flex"
          >
            <MdEmail size={30} color="red" />
            <span>: rajsongara24@gmail.com</span>
          </a>

          <a href="tel:+919111577184" style={styles.contact}
          className="flex"
          >
            <FaPhoneAlt size={30} color="red" />
            <span>: +91-9111577184</span>
          </a>
          <motion.a
            href="https://www.google.com/maps/place/Nihal+Nagar,+Dhar,+Madhya+Pradesh+454001/@22.6121343,75.3073816,18z/data=!4m6!3m5!1s0x396235db02d881e1:0x72bb8f62fac71db6!8m2!3d22.6105788!4d75.3076904!16s%2Fg%2F1ptx2zp0h?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.contact}
            className="flex"
          >
            <MdLocationOn size={50} color="red" />
            <span>
              : 182, Nihal Nagar Colony, Ratlam Road, Dhar - 454001, M.P.
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    width: "100%",
    // paddingTop: "70px",
    color: "white",
    // height: "1000px",
    background: "rgba(32, 32, 32, 0.15)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    fontFamily: "'Raleway', sans-serif",
    marginTop:"50px"
  },
  left: {
    width: "50%",
    padding:"20px"

  },
  // right: {
  //   // height: "600px",
  //   width: "100%",
  // },
  input: {
    // width: "300px",
    marginTop: "15px",
    padding: "15px",
    background: "rgba(32, 32, 32, 0.15)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    border: "2px solid rgba(255, 0, 0, 0.25)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    fontFamily: "'Raleway', sans-serif",
  },
  inputTxt: {
    // width: "300px",
    marginTop: "15px",
   
    padding: "15px",
    height: "120px",
    background: "rgba(32, 32, 32, 0.15)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    border: "2px solid rgba(255, 0, 0, 0.25)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    fontFamily: "'Raleway', sans-serif",
    resize: "none",
  },
  heading: {
    color: "red",
    textAlign: "center",

    width: "100%",

    
    fontFamily: "'Raleway', sans-serif",
  },
  btn: {
    // width: "300px",
    // margin: "15px",
    padding: "15px",
    background: "rgba(32, 32, 32, 0.15)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    border: "2px solid rgba(255, 0, 0, 0.25)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    fontFamily: "'Raleway', sans-serif",
  },
  line: {
    width: "2px",
    height: "500px",

    border: "2px solid rgba(255, 0, 0, 0.25)",
  },
  label: {
    color: "white",
    fontSize: "20px",
  },
  contact: {
    // display: "flex",
    // alignitems: "center",
    // gap: "30px",
    // textdecoration: "none",
    // color: "#fff",
    // fontSize: "20px",
    // marginBottom: "60px",
  },
  result: {
    marginLeft: "180px",
    color: "green",
    fontSize: "20px",
  },
};
export default Contact;
