import React from "react";
import "./SubscribeStyle.css";

const Subscribe = () => {
  return (
    <div id="subscribe-section">
      <div className="container">
        <div className="subscribe-container">
          <div className="subscribe-text">
            <h2>Subscribe to the updates!</h2>
            <p>
              Sign up to our newsletter and be the first to know about the
              latest news, special offers, events, and discounts.
            </p>
          </div>
          <div className="subscribe-box">
            <input type="email" name="" id="" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
