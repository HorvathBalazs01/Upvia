import "../styles/componentStyles/footer.css"
import React from "react";
import {Instagram, Facebook, Tiktok} from "react-bootstrap-icons"

function Footer(){
    return(
        <>
            <footer className="footer">
                <hr />
                <div className="footer-container">
                    <div className="footer-section">
                    <h3 className="footer-logo">About Our Mission</h3>
                    <p className="footer-description">
                        We help people discover their path to autonomy through self-motivation and personalized guidance. Build your future on your own terms.
                    </p>
                    </div>

                    <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/survey">Take the Quiz</a></li>
                        <li><a href="/privacy">Self-Motivation Guide</a></li>
                        <li><a href="/privacy">Mindset Exercise</a></li>
                        <li><a href="/privacy">Support Us</a></li>
                    </ul>
                    </div>

                    <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="footer-socials">
                        <a href="https://instagram.com" target="_blank"><Instagram size={18} /></a>
                        <a href="https://facebook.com" target="_blank"><Facebook size={18} /></a>
                        <a href="https://tiktok.com" target="_blank"><Tiktok size={18} /></a>
                    </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Upvia. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;