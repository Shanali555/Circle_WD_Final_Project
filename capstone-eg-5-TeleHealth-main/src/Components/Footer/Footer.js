import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyle.css";
import {
  FaGooglePlay,
  FaApple,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import FooterLogo from "../../Images/logo.png";

const Footer = () => {
  return (
    <footer id="footer-section">
      <div className="container">
        <div className="footer-container">
          <div className="footer-site-col">
            <Link to="/">
              <img src={FooterLogo} alt="Footer-Logo" />
            </Link>

            <p>
              Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere
              blandit. vivamus suscipit tortor ege.
            </p>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
          <div className="footer-contacts-col">
            <h2>Contacts Info</h2>
            <div className="contact-row">
              <span className="contact-title">Address:</span>
              <span>312 Clinton Circle Atlantic City, M2 080522</span>
            </div>
            <br />
            <div className="contact-row">
              <div className="contact-title">Phone:</div>
              <div>+92(000) 984 2020</div>
            </div>
            <br />
            <div className="contact-row">
              <div className="contact-title">Email:</div>
              <div>info@domain.com</div>
            </div>
            <br />
            <div className="contact-row">
              <div className="contact-title">Time:</div>
              <div>Every day 24 hours</div>
            </div>
          </div>
          <div className="footer-links-col">
            <h2>Quick Link</h2>
            <ul>
              <li>
                <a href="#home">About Us</a>
              </li>
              <li>
                <a href="#home">Services</a>
              </li>
              <li>
                <a href="#home">Contact Us</a>
              </li>
              <li>
                <a href="#home">Privacy Policy</a>
              </li>
              <li>
                <a href="#home">Terms of service</a>
              </li>
            </ul>
          </div>
          <div className="footer-apps-col">
            <h2>Apps Download</h2>
            <p>
              Download today and get your free copy from Apple and Play Store
            </p>

            <div className="footer-btns">
              <button className="footerplaystore-btn">
                <FaGooglePlay /> Play Store
              </button>
              <button className="footerappstore-btn">
                <FaApple /> App Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-copyright">
          <hr className="footer-line" />
          <p>Copyright @ 2022 Tele Health. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
