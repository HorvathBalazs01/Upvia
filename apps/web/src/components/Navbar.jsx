import "../styles/componentStyles/navbar.css"
import reactLogo from '../assets/react.svg'
import {Instagram, Facebook, Tiktok} from "react-bootstrap-icons"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="leftContainer">
                    <div className="left-nav-logo">
                        <img src={reactLogo} alt="#" />
                    </div>
                    <div className="left-nav-object">
                        <a href="">About us</a>
                        <a href="">Survey</a>
                        <a href="">Self-motivation</a>
                        <a href="">Supporters</a>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="right-nav-social">
                        <a href=""><Instagram size={16}/></a>
                        <a href=""><Facebook size={16}/></a>
                        <a href=""><Tiktok size={16}/></a>
                    </div>
                    <div className="right-nav-profile">
                        <a href=""><img src={reactLogo} alt="" /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
