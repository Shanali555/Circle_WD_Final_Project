import React from "react";
import "./ServicesStyle.css";
import ServiceImg1 from "../../Images/service-1.png";
import ServiceImg2 from "../../Images/service-2.png";
import ServiceImg3 from "../../Images/service-3.png";
import ServiceImg4 from "../../Images/service-4.png";
import ServiceImg5 from "../../Images/service-5.png";
import ServiceImg6 from "../../Images/service-6.png";
import ServiceImg7 from "../../Images/service-7.png";
import ServiceImg8 from "../../Images/service-8.png";
import ServiceImg9 from "../../Images/service-9.png";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
  return (
    <div id="services-section">
      <div className="container">
        <div className="service-container">
          <h3>Our Services</h3>
          <h2>Tele Health Professional Services</h2>

          <div class="service-cards">
            <ServiceComponent
              imgUrl={ServiceImg1}
              serviceTitle="Ambulance Services"
            />
            <ServiceComponent imgUrl={ServiceImg2} serviceTitle="Blood Bank" />
            <ServiceComponent
              imgUrl={ServiceImg3}
              serviceTitle="Chemist Online"
            />

            <ServiceComponent
              imgUrl={ServiceImg4}
              serviceTitle="Diagnostic Reports"
            />
            <ServiceComponent
              imgUrl={ServiceImg5}
              serviceTitle="Fitness Exercises"
            />
            <ServiceComponent
              imgUrl={ServiceImg6}
              serviceTitle="Health Insurance"
            />

            <ServiceComponent
              imgUrl={ServiceImg7}
              serviceTitle="Ambulance Services"
            />
            <ServiceComponent imgUrl={ServiceImg8} serviceTitle="Blood Bank" />
            <ServiceComponent
              imgUrl={ServiceImg9}
              serviceTitle="Chemist Online"
            />
          </div>
          <button className="service-btn">See All Services</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
