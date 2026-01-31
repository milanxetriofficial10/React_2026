import React from "react";
import "./css/Footer.css";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
function Footer(){
    return(
        <footer className="footer">
            <h2 className="footer-logo">Milan Programmer</h2>

            <ul className="footer-links">
                <li>Home</li>
                <li>About</li>
                <li>Milan</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>

            {/* social icons */}
            <div className="social-icons">
                <FaFacebook />
                <FaInstagram />
                <FaGithub />
            </div>

            <p className="footer-text">
                2026 Milan Programmer. All right resvered
            </p>

        </footer>
    )
}

export default Footer;