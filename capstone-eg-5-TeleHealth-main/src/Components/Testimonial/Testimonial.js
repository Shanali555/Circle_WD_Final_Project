import React from "react";
import "./TestimonialStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialClient from "../../Images/testimonial-client.svg";
import TestimonialC1 from "../../Images/client-1.png";
import TestimonialC2 from "../../Images/client-2.png";
import TestimonialC3 from "../../Images/client-3.png";
import TestimonialC4 from "../../Images/client-4.png";
import TestimonialC5 from "../../Images/client-5.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="testimonial-section">
      <div className="container">
        <div className="testimonial-container">
          <h3>Testimonial</h3>
          <h2>What Our Client Say About Us</h2>
          <Slider {...settings}>
            <div className="testimonial-client">
              <img src={TestimonialClient} alt="Testimonial-Img" />
              <p>
                “Proin eget tortor risus. Mauris blandit aliquet elit, eget
                tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Donec sollicitudin molestie
                malesuada. Mauris blandit aliquet elit eget”
              </p>
              <h4>McDonald Smith</h4>
              <h5>CEO & Founder</h5>
            </div>
            <div className="testimonial-client">
              <img src={TestimonialC1} alt="Testimonial-Img" />
              <p>
                “Proin eget tortor risus. Mauris blandit aliquet elit, eget
                tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Donec sollicitudin molestie
                malesuada. Mauris blandit aliquet elit eget”
              </p>
              <h4>Oliver Dawson</h4>
              <h5>Manager</h5>
            </div>
            <div className="testimonial-client">
              <img src={TestimonialC2} alt="Testimonial-Img" />
              <p>
                “Proin eget tortor risus. Mauris blandit aliquet elit, eget
                tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Donec sollicitudin molestie
                malesuada. Mauris blandit aliquet elit eget”
              </p>
              <h4>Georgette Mcgee</h4>
              <h5>HR Head</h5>
            </div>
          </Slider>
          <div className="testimonial-clients-img">
            <img
              src={TestimonialC1}
              alt="Testimonial-Client-Img"
              className="c1"
            />
            <img
              src={TestimonialC2}
              alt="Testimonial-Client-Img"
              className="c2"
            />
            <img
              src={TestimonialC3}
              alt="Testimonial-Client-Img"
              className="c3"
            />
            <img
              src={TestimonialC4}
              alt="Testimonial-Client-Img"
              className="c4"
            />
            <img
              src={TestimonialC5}
              alt="Testimonial-Client-Img"
              className="c5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
