import NavItem from "./NavItem";


export default function Navbar({ highlight, onHome, onProjects, onSkills, onContact,onAbout }) {
  return (
    <div className="flex w-full justify-center items-center fixed top-5 z-100">
      <nav
      style={{
       
        
        padding: "16px 32px",
        background: "rgba(20, 19, 19, 0.15)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderRadius: "999px",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        zIndex: 100
      }}
      className="w-[85%] md:w-150 flex justify-evenly items-center"
    >
      <span  
              className={`${
                highlight === "Home" ? "text-red-600" : "text-white"
              }`}><NavItem text="Home" colour={highlight} onClk={onHome} /></span>
      <span  
              className={`hidden md:block  ${
                highlight === "About" ? "text-red-600" : "text-white"
              }`}><NavItem text="About" colour={highlight} onClk={onAbout} /></span>
      <span  
              className={`${
                highlight === "Projects" ? "text-red-600" : "text-white"
              }`}><NavItem text="Projects" colour={highlight} onClk={onProjects} /></span>
      <span  
              className={`${
                highlight === "Skills" ? "text-red-600" : "text-white"
              }`}><NavItem text="Skills" colour={highlight} onClk={onSkills} /></span>
      <span  
              className={`${
                highlight === "Contact" ? "text-red-600" : "text-white"
              }`}><NavItem text="Contact" colour={highlight} onClk={onContact} /></span>
      {/* <span className="hidden md:inline"><NavItem text="About Me" link="aboutme"/></span> */}
      {/* <NavItem text="Projects" />
      <NavItem text="Skills" />
      <NavItem text="Contact" /> */}
    </nav>
    </div>
  );
}
