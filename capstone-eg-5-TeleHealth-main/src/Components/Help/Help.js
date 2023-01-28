import React from "react";
import "./HelpStyle.css";
import HelpImg from "../../Images/help.png";
import HelpArrow from "../../Images/help-arrow.png";
import CheckImg from "../../Images/circle-check.png";

const Help = () => {
  return (
    <div id="help-section">
      <div className="container">
        <div className="help-container">
          <div className="help-left">
            <h3>How We Help Patients</h3>
            <h2>
              We help patients with all the online-based services of Telehealth
              & Telemedicine.
            </h2>
            <p className="help-para">
              Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui
              posuere blandit. Vestibulum ac diam sit amet vehicula elementum.
            </p>
            <div className="help-left-boxes">
              <div className="help-box-left">
                <img src={HelpArrow} className="helparrow-img" alt="Help-Img" />
                <div className="help-box">
                  <img src={CheckImg} className="check-icon" alt="Check-Img" />
                  <p>Pay Less</p>
                </div>
                <div className="help-box">
                  <img src={CheckImg} className="check-icon" alt="Check-Img" />
                  <p>Quality Compared</p>
                </div>
                <div className="help-box">
                  <img src={CheckImg} className="check-icon" alt="Check-Img" />
                  <p>Share Documents Securely</p>
                </div>
              </div>
              <div className="help-box-right">
                <div className="help-box">
                  <img src={CheckImg} className="check-icon" alt="Check-Img" />
                  <p>Time Saved</p>
                </div>
                <div className="help-box">
                  <img src={CheckImg} className="check-icon" alt="Check-Img" />
                  <p>Telehealth During COVID-19</p>
                </div>
                <div className="help-box">
                  <img src={CheckImg} className="check-icon" alt="Check-Img" />
                  <p>Primary Care & Urgent Care</p>
                </div>
              </div>
            </div>
          </div>
          <div className="help-right">
            <img src={HelpImg} alt="Help-Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
