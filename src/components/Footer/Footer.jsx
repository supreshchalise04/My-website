import React, { useState } from "react";
import "./Footer.css";
import Footer_logo from "../../assets/mainlogo1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-top-left">
          <img src={Footer_logo} alt="Footer Logo" />
          <p>
            Passionate about web technologies, I strive to create seamless user
            experiences. Constantly learning and innovating, I stay updated with
            the latest frontend trends.
          </p>
        </div>

        {/* Right Navigation Section */}
        <div className="footer-top-right">
          <ul>
            <li className={activePage === "home" ? "active" : ""}>
              <AnchorLink href="#home" onClick={() => setActivePage("home")}>
                Home
              </AnchorLink>
            </li>
            <li className={activePage === "about" ? "active" : ""}>
              <AnchorLink href="#about" onClick={() => setActivePage("about")}>
                About
              </AnchorLink>
            </li>
            <li className={activePage === "work" ? "active" : ""}>
              <AnchorLink href="#work" onClick={() => setActivePage("work")}>
                Work
              </AnchorLink>
            </li>
            <li className={activePage === "contact" ? "active" : ""}>
              <AnchorLink
                href="#contact"
                onClick={() => setActivePage("contact")}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2025 Supresh Chalise. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
