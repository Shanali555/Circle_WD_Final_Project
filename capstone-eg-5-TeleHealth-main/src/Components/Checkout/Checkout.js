import React from "react";
import "./CheckoutStyle.css";
import PhoneLeft from "../../Images/phone-left.png";
import PhoneRight from "../../Images/phone-right.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Checkout = () => {
  return (
    <div id="checkout-section">
      <div className="container">
        <div className="checkout-container">
          <div className="checkout-left">
            <img src={PhoneRight} alt="Phone-Img" className="phone-right" />
            <img src={PhoneLeft} alt="Phone-Img" className="phone-left" />
          </div>
          <div className="checkout-right">
            <h3>CHOOSE YOUR DEVICE PLATFORM</h3>
            <h2>Checkout Our App</h2>
            <p>
              Et optio praesent et! Eligendi ab, irure impedit rhoncus,
              doloremque! Pretium nobis nobis modi ullamco.
            </p>
            <button className="checkout-btn">
              <FaGooglePlay className="app" /> Play Store
            </button>
            <button className="checkout-btn">
              <FaApple /> App Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
