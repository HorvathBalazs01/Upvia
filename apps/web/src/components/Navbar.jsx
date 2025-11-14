import "../styles/componentStyles/navbar.css"
import reactLogo from '../assets/react.svg'
import {Instagram, Facebook, Tiktok} from "react-bootstrap-icons"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                <a href="/" className="navbar-logo">
                    <img src="/logo2.png" alt="Logo" />
                </a>

                <ul className="navbar-links">
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/survey">Survey</a></li>
                    <li><a href="/self-motivation">Self Motivation</a></li>
                    <li><a href="/supporters">Supporters</a></li>
                </ul>
                </div>

                <div className="navbar-right">
                <div className="navbar-socials">
                    <a href="#"><Instagram size={18} /></a>
                    <a href="#"><Facebook size={18} /></a>
                    <a href="#"><Tiktok size={18} /></a>
                </div>

                <a href="/profile" className="navbar-profile">
                    <img src="/blank-profile.png" alt="Profile" />
                </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
