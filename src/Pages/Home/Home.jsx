import React from "react";
import Booking from "../../Component/booking/Booking";
import Country from "../../Component/country/Country";
import Header from "../../Component/Header/Header";
import Services from "../../Component/services/Services";
import Navbar from "../../Layout/Navabar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Country />
      <Booking />
      <Services />
    </div>
  );
};

export default Home;
