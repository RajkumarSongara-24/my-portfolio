import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import CircularGallery from './CircularGallery'
import sofa from "../assets/sofa.jpg";
import Apartments from "../assets/Apartments.jpg";
import burger from "../assets/burger1.jpg";
import food from "../assets/food 1.jpg";
import cake from "../assets/cake2.jpg";
import headphone from "../assets/headphone1.jpg";
import juice from "../assets/juice.jpg";
import home from "../assets/home furniture.jpg";
import noodels from "../assets/noodels.jpg";
import pizza from "../assets/pizza2.jpg";
import fries from "../assets/french fries.jpg";
import face from "../assets/face wash1.jpg";
import jewellery from "../assets/jewellwey1.jpg";
import travel from "../assets/travel.jpg";
import overthink from "../assets/ovethinking.jpg";
import insomaniac from "../assets/insomaniac.jpg";
import RajPoster from "../assets/RajPoster.jpg";
import DontLookBehind from "../assets/dontLookBehind.jpg";
import Royal from "../assets/Royal.png";
import ConnectUs from "../assets/ConnectUs.png";
import G9 from "../assets/G9.png";
import Packaging from "../assets/Packaging.png";
import Viewer from 'viewerjs';
const GraphicProjects = () => {

  const [activeTab, setActiveTab] = useState("social");

  // 👉 JUST ADD YOUR IMAGES HERE
  const designs = {
    social: [
      sofa,
      Apartments,
      burger,
      food,
      cake,
      headphone,
      juice,
      home,
      noodels,
      pizza,
      fries,
      face
    ],

    logo: [
      Royal,
      ConnectUs,
      G9,
    ],

    poster: [
      RajPoster,
      DontLookBehind,
      jewellery,
      travel,
      overthink,
      insomaniac,
    ],

    packaging: [
      Packaging,
    ],
  };




const galleryRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    viewerRef.current = new Viewer(galleryRef.current, {
      // ✅ Selected Features Only
      backdrop: true,
      button: true,
      focus: true,
      fullscreen: true,
      loading: true,
      loop: true,
      transition: true,
      zoomable: true,
      zoomOnTouch: true,
      zoomOnWheel: true,

      // ❌ Disabled Features
      navbar: false,
      toolbar: false,
      movable: false,
      rotatable: false,
      scalable: false,
      slideOnTouch: false,
      title: false,
      tooltip: false,
      keyboard: false,
    });

    return () => {
      viewerRef.current.destroy();
    };
  }, []);


  return (
    <div
      
      style={styles.container}
      className='w-[95%]'
    >
      <div style={styles.tabs}>
        <Tab label="Social Media" active={activeTab === "social"} onClick={() => setActiveTab("social")} />
        <Tab label="Logo" active={activeTab === "logo"} onClick={() => setActiveTab("logo")} />
        <Tab label="Poster" active={activeTab === "poster"} onClick={() => setActiveTab("poster")} />
        <Tab label="Packaging" active={activeTab === "packaging"} onClick={() => setActiveTab("packaging")} />
      </div>

      {/* Grid */}
      <div style={styles.grid}
      
      className='grid grid-cols-3 gap-1 md:gap-2'
      ref={galleryRef}
      >
        {designs[activeTab].map((img, index) => (
          <div key={index} style={{
            ...styles.card,
            width: cardSize[activeTab].width,
            height: cardSize[activeTab].height,
          }}
          
          className={`cursor-zoom-in ${cardSize[activeTab]}`}
          >
            <img src={img} alt="" style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.tab,
        borderBottom: active ? "2px solid white" : "2px solid transparent",
        opacity: active ? 1 : 0.6,
      }}
    >
      {label}
    </button>
  );
}

const styles = {
  container: {
    // width: "100vw",
    margin: "0 auto",
    padding: "20px",
    color: "white",
    height:"auto",
   
    zIndex: 10,
    
    background: "rgba(32, 32, 32, 0.15)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    fontFamily: "'Raleway', sans-serif",
  },

  tabs: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
    borderBottom: "1px solid #333",
  },

  tab: {
    background: "none",
    border: "none",
    padding: "12px",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    textTransform: "uppercase",
  },

  grid: {
    // display: "grid",
    // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    // gap: "10px",
    justifyContent: "center",
  },

  card: {
    aspectRatio: "1 / 1",
    overflow: "hidden",
    borderRadius: "10px",
    background: "#111",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

const cardSize = {
  // social: { width: "100%", height: "330px" },
  // logo: { width: "220px", height: "220px" },
  // poster: { width: "320px", height: "440px" }, // poster = vertical
  // packaging: { width: "240px", height: "240px" },
  social:"w-full h-full",
  logo:"w-full h-full",
  poster:"w-full h-full",
  packaging:"w-full h-full",



};

export default GraphicProjects;
