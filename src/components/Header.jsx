import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="" style={linkStyle}>
          Home
        </Link>
        <Link to="stagepage/1" style={linkStyle}>
          Stage 1
        </Link>
        <Link to="stagepage/2" style={linkStyle}>
          Stage 2
        </Link>
      </nav>
    </header>
  );
}

// Styling
const headerStyle = {
  backgroundColor: "#1f1f1f", // Dark background
  padding: "15px 0",
  textAlign: "center",
};

const navStyle = {
  display: "flex",
  paddingLeft: "80px",
  gap: "40px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none", // No underline by default
  fontSize: "18px",
  fontWeight: "500",
  padding: "5px 0",
  borderBottom: "2px solid transparent", // Invisible underline
  transition: "border-color 0.3s ease-in-out, color 0.3s ease-in-out",
};
