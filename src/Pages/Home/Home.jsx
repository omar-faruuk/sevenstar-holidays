import React from "react";
import Booking from "../../Component/booking/Booking";
import Country from "../../Component/country/Country";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Services from "../../Component/services/Services";
import Team from "../../Component/Team/Team";
import Testimonial from "../../Component/Testimonial/Testimonial";
import Navbar from "../../Layout/Navabar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Country />
      <Booking />
      <Services />
      <Testimonial />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
