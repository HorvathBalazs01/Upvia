import { useState } from "react";
import "../styles/componentStyles/navbar.css";
import { Instagram, Facebook, Tiktok } from "react-bootstrap-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            <img src="/logo2.png" alt="Logo" />
          </a>

          <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <li><a href="about-us">About Us</a></li>
            <li><a href="survey">Survey</a></li>
            <li><a href="self-motivation">Self Motivation</a></li>
            <li><a href="supporters">Supporters</a></li>
            <li><a href="donations">Donations</a></li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="navbar-socials">
            <a href="https://instagram.com" target="_blank"><Instagram size={18} /></a>
            <a href="https://facebook.com" target="_blank"><Facebook size={18} /></a>
            <a href="https://tiktok.com" target="_blank"><Tiktok size={18} /></a>
          </div>

          <a href="#" className="navbar-profile">
            <img src="/blank-profile.png" alt="Profile" />
          </a>

          {/* Hamburger Menu */}
          <div className="navbar-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
