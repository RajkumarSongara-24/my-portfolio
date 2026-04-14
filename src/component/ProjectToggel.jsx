import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectToggel = ({ onChange }) => {
  const [active, setActive] = useState("web");
  const [type, setType] = useState("web");

  const options = [
    { id: "web", label: "Web Development" },
    { id: "graphic", label: "Graphic Design" },
  ];
  return (
    <div
        onChange={setType}
      style={{
      
        display: "flex",
        width:"fit-content",
        background: "rgba(247, 240, 240, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "999px",
        padding: "6px",
      }}
    >
      {/* Sliding background */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
           position: "absolute",
          top: 6,
          bottom: 6,
          width: "47%",
          borderRadius: "999px",
          background: "#f50808",
          left: active === "web" ? "15px" : "calc(50% + 6px)",
          // filter:"blur(40px)"
          // display:"none"
        }}
      />

      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => {
            setActive(option.id);
            onChange?.(option.id);
          }}
          style={{
           
            zIndex: 1,
            padding: "12px 22px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontWeight: 500,
            color: active === option.id? "#ffffff" : "#f8f7f7",
            // filter: active === option.id? "drop-shadow(0px 0px 5px red)" : "drop-shadow(0px 0px 0px)",
            transition: "color 0.3s ease",
            whiteSpace: "nowrap",
          }}
        >
          {option.label}
        </button>
      ))}

    </div>
  )
}

export default ProjectToggel;
