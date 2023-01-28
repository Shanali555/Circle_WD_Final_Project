import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Feature from "../Components/Feature/Feature";
import Provide from "../Components/Provide/Provide";
import Count from "../Components/Count/Count";
import Services from "../Components/Services/Services";
import Help from "../Components/Help/Help";
import Appointment from "../Components/Appointment/Appointment";
import Checkout from "../Components/Checkout/Checkout";
import Testimonial from "../Components/Testimonial/Testimonial";
import Telehealth from "../Components/Telehealth/Telehealth";
import Subscribe from "../Components/Subscribe/Subscribe";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Provide />
      <Count />
      <Services />
      <Help />
      <Appointment />
      <Checkout />
      <Testimonial />
      <Telehealth />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
