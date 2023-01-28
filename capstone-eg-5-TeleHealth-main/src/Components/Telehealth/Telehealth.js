import React from "react";
import "./TelehealthStyle.css";
import TelehealthImg from "../../Images/telehealth.png";

const Telehealth = () => {
  return (
    <div id="telehealth-section">
      <div className="container">
        <div className="telehealth-container">
          <div className="telehealth-left-col">
            <h3>Telehealth</h3>
            <h2>Getting safe healthcare at home</h2>
            <p className="first-para">
              Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus.
            </p>
            <p className="second-para">
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
              sem. Vestibulum ante ipsum primis in.
            </p>
            <button className="telehealth-btn">Make An Appointment</button>
          </div>
          <div className="telehealth-right-col">
            <img src={TelehealthImg} alt="Telehealth-Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telehealth;
