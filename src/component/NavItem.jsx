export default function NavItem({ text,colour,onClk }) {
  const link = text.toLowerCase().replace(" ", "");
  return (
    <a
      // href={`#${link}`}
      style={{
        // color: "#fcfcfcff",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        // fontSize: "16px",
        // fontWeight: "500",
        padding: "6px 12px",
        borderRadius: "12px",
        transition: "background 0.3s ease, transform 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "rgba(228, 217, 217, 0.2)";
        e.target.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "transparent";
        e.target.style.transform = "translateY(0)";
      }}

      onClick={onClk}
      className={`text-sm md:text-lg cursor-pointer ${colour}`}
    >
      {text}
    </a>
  );
}
