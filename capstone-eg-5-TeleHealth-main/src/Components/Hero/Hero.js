import React from "react";
import "./HeroStyle.css";
import HeroRightImage from "../../Images/hero-img.png";
import HeroArrow from "../../Images/hero-arrow.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="hero-section">
      <div className="container">
        <div className="hero-container">
          <div className="hero-left">
            <img src={HeroArrow} alt="" />
            <h1>We provide Remote Health Care Services</h1>
            <p>
              Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere
              blandit. Vivamus suscipit tortor eget felis porttitor volutpat.
            </p>
            <div className="checkout-section">
              <h2>Checkout Our App</h2>
              <button className="play-btn">
                <FaGooglePlay /> Play Store
              </button>
              <button className="app-btn">
                <FaApple /> App Store
              </button>
            </div>
            <p>
              Have question? <a href="#home">Please contact us</a>
            </p>
          </div>
          <div className="hero-right">
            <img src={HeroRightImage} alt="Hero-Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
