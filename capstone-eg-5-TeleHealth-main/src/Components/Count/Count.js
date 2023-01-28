import React from "react";
import "./CountStyle.css";

const Count = () => {
  return (
    <div id="count-section">
      <div className="container">
        <div className="count-container">
          <div className="count-left">
            <div className="counter-card">
              <h2>35,200</h2>
              <p>Virtual Consultations Completed</p>
            </div>
            <div className="counter-card">
              <h2>8,520</h2>
              <p>Homes Clinically Supported</p>
            </div>
          </div>
          <div className="count-right">
            <div className="counter-card">
              <h2>3,571</h2>
              <p>Virtual Care Solutions</p>
            </div>
            <div className="counter-card">
              <h2>99.9%</h2>
              <p>Connections Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
