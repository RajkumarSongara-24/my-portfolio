import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import atmImg from "../assets/atm.png";
import logoImg from "../assets/logo.jpg";
import self from "../assets/self.png";
const WebProjects = () => {
  const parentRef = useRef(null);
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  // const [isHovering, setIsHovering] = useState(false);

useEffect(() => {
  const parent = parentRef.current;
  const container = containerRef.current;

  if (!parent || !container) return;

  const maxScroll =
    parent.clientWidth - container.scrollWidth; // negative

  /* ---------------- DESKTOP WHEEL ---------------- */
  // const handleWheel = (e) => {
  //   if (!isHovering) return;

  //   e.preventDefault();

  //   const nextX = x.get() - e.deltaY * 0.8;

  //   x.set(Math.max(maxScroll, Math.min(0, nextX)));
  // };

  // parent.addEventListener("wheel", handleWheel, { passive: false });

  /* ---------------- MOBILE TOUCH ---------------- */

  let startX = 0;
  let startTranslate = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    startTranslate = x.get();
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const delta = currentX - startX;

    let nextX = startTranslate + delta;

    // Clamp
    nextX = Math.max(maxScroll, Math.min(0, nextX));

    x.set(nextX);
  };

  parent.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });

  parent.addEventListener("touchmove", handleTouchMove, {
    passive: false,
  });

  return () => {
    // parent.removeEventListener("wheel", handleWheel);
    parent.removeEventListener("touchstart", handleTouchStart);
    parent.removeEventListener("touchmove", handleTouchMove);
  };
}, [isHovering, x]);

  // useEffect(() => {
  //   const parent = parentRef.current;
  //   const container = containerRef.current;

  //   if (!parent || !container) return;

  //   const maxScroll = parent.clientWidth - container.scrollWidth; // negative value

  //   const handleWheel = (e) => {
  //     if (!isHovering) return;

  //     e.preventDefault();

  //     const nextX = x.get() - e.deltaY * 0.8;

  //     // Clamp value
  //     if (nextX > 0) {
  //       x.set(0);
  //     } else if (nextX < maxScroll) {
  //       x.set(maxScroll);
  //     } else {
  //       x.set(nextX);
  //     }
  //   };

  //   parent.addEventListener("wheel", handleWheel, { passive: false });

  //   return () => {
  //     parent.removeEventListener("wheel", handleWheel);
  //   };
  // }, [isHovering, x]);
  return (
    <div
      ref={parentRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        
        // width: "100%",
        padding: "25px",
        display:"start",
        overflow: "hidden",
        zindex: "10",
        color: "white",
        fontSize: "60px",
        fontFamily: "'Raleway', sans-serif",
        background: "rgba(32, 32, 32, 0.15)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
      }}

      className="w-[95%] md:w-full md:h-120 h-95"
    >
      <motion.div
        ref={containerRef}
        style={{
          display: "flex",
          x,
          justifyContent: "center",   // ✅ center horizontally
    width: "fit-content",       // ✅ shrink to content width
    margin: "0 auto",
        }}
      >
        <a
          href="https://basic-atm-application.great-site.net/?i=1"
          target="_blank"
        >
          <div
            style={{
              // height: "400px",
              // width: "350px",
              margin: "15px",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "10%",
              background: "rgba(32, 32, 32, 0.15)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            }}
            className="md:h-100 h-75 md:w-88 w-60 flex flex-col justify-around items-center"
          >
            <img
              src={atmImg}
              alt="atm"
              style={{
                // width: "150px",

                filter: "drop-shadow(0 0 50px rgba(255, 255, 255, 0.6))",
              }}
              className="md:w-37 w-25"
            />
            <div className="flex flex-col items-center gap-3">
              <h4 className="md:text-2xl text-xl">Basic ATM Machine</h4>
              <hr className="w-[99%] h-[0.5px] bg-white " />
              <p style={{ textAlign: "center" }}
              className="md:text-sm text-xs"
              >
                Basic ATM Machine project.
                <br />
                Much similar to real ATM. Like Deposit, Withdrawal, Fund
                Transfer, etc.
              </p>
            </div>
          </div>
        </a>

        <a href="http://connectus.great-site.net" target="_blank">
          <div
            style={{
              // height: "400px",
              // width: "350px",
              margin: "15px",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "10%",
              background: "rgba(32, 32, 32, 0.15)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            }}
            className="flex flex-col justify-around items-center md:h-100 h-75 md:w-88 w-60"
          >
            <img
              src={logoImg}
              alt="atm"
              style={{
                // width: "150px",

                filter: "drop-shadow(0 0 50px rgba(255, 255, 255, 0.6))",
              }}
              className="md:w-37 w-25 rounded-full"
            />
            <div className="flex flex-col items-center gap-3">
              <h4 className="md:text-2xl text-xl">ConnectUS</h4>
              <hr className="w-[99%] h-[0.5px] bg-white" />
              <p style={{ textAlign: "center" }}
               className="md:text-sm text-xs"
              >
                An social media platform.
                <br />
                Login when you want to see working of it and share your
                feedback.
              </p>
            </div>
          </div>
        </a>

        <a href="">
          <div
            style={{
              // height: "400px",
              // width: "350px",
              margin: "15px",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "10%",
              background: "rgba(32, 32, 32, 0.15)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            }}
            className="flex flex-col justify-around items-center md:h-100 h-75 md:w-88 w-60"
          >
            <img
              src={self}
              alt="atm"
              style={{
                // width: "150px",

                filter: "drop-shadow(0 0 50px rgba(255, 255, 255, 0.6))",
              }}
              className="md:w-37 w-25 rounded-full"
            />
            <div className="flex flex-col items-center gap-3">
              <h4 className="md:text-2xl text-xl">Self Portfolio</h4>
              <hr className="w-[99%] h-[0.5px] bg-white" />
              <p style={{ textAlign: "center" }}
               className="md:text-sm text-xs"
              >
                Self Portfolio.
                <br />
                Self portfolio created to show my works. This Portfolio is created usign react.
              </p>
            </div>
          </div>
        </a>



 

 {/* <a href="/" target="_blank">
          <div
            style={{
              // height: "400px",
              // width: "350px",
              margin: "15px",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "10%",
              background: "rgba(32, 32, 32, 0.15)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            }}
            className="flex flex-col justify-around items-center md:h-100 h-75 md:w-88 w-60"
          >
            
          </div>
        </a>
 <a href="/" target="_blank">
          <div
            style={{
              // height: "400px",
              // width: "350px",
              margin: "15px",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "10%",
              background: "rgba(32, 32, 32, 0.15)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            }}
            className="flex flex-col justify-around items-center md:h-100 h-75 md:w-88 w-60"
          >
            
          </div>
        </a>
 <a href="/" target="_blank">
          <div
            style={{
              // height: "400px",
              // width: "350px",
              margin: "15px",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "10%",
              background: "rgba(32, 32, 32, 0.15)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            }}
            className="flex flex-col justify-around items-center md:h-100 h-75 md:w-88 w-60"
          >
            
          </div>
        </a>
 <a href="/" target="_blank">
          <div
            style={{
              // height: "400px",
              // width: "350px",
              margin: "15px",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "10%",
              background: "rgba(32, 32, 32, 0.15)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            }}
            className="flex flex-col justify-around items-center md:h-100 h-75 md:w-88 w-60"
          >
            
          </div>
        </a>

 */}




      </motion.div>
    </div>
  );
};

export default WebProjects;
