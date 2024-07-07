import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Optionally, import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2024 Wylo. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
