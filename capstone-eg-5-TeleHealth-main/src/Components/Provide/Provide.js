import React from "react";
import "./ProvideStyle.css";
import ProvideImg from "../../Images/provide.svg";

const Provide = () => {
  return (
    <div id="provide-section">
      <div className="container">
        <div className="provide-container">
          <div className="provide-left">
            <img src={ProvideImg} className="provide-img" alt="Provide-Img" />
          </div>
          <div className="provide-right">
            <h3>What We Provide</h3>
            <div className="provide-right-text">
              <h2>
                Resolves the disease by making face-to-face contact with
                patients on the telehealth platform.
              </h2>
              <p>
                Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id
                dui posuere blandit. Vestibulum ac diam sit amet vehicula
                elementum.
              </p>
            </div>

            <div className="percentage">
              <span className="black">80%</span>
              <p>Of patients are interested in using telemedicine</p>
            </div>
            <div className="percentage">
              <span className="black">90%</span>
              <p>Of patients are satisfied with the telehealth experience</p>
            </div>
            <div className="percentage">
              <span className="black">40%</span>
              <p>Of patients use telemedicine due to short travel time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
