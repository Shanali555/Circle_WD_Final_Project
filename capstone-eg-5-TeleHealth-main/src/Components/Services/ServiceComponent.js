import React from "react";

const ServiceComponent = ({ imgUrl, serviceTitle }) => {
  return (
    <div className="service-card">
      <div className="img-container">
        <img src={imgUrl} alt="service-icon" />
      </div>
      <h5 className="service-card-title">{serviceTitle}</h5>
    </div>
  );
};

export default ServiceComponent;
