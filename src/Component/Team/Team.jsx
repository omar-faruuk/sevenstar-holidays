import React from "react";
import Slider from "react-slick";
import "./Team.css";
import bishal from "../../image/bishal.jpeg";
import shajib from "../../image/shajib.jpg";
import nahid from "../../image/nahid.jpg";
import shohel from "../../image/shohel.jpeg";
import mohin from "../../image/mohin.jpeg";
import adnan from "../../image/adnan.jpeg";
import rumi from "../../image/rumi.jpg";
import rajib from "../../image/rajib.jpg";
// import mahin from "../../image/mahin.jpg";
function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          speed: 500,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="container team text-center">
      <h4>Meet our Team</h4>
      <div className="row gap-0 sr mb-5 d-flex justify-content-center">
        <div className="sr-panel col-md-4">
          <img src={shohel} alt="" />
          <h5 className="mt-2 fs-4">Sohel Rana</h5>
          <p className="">CEO</p>
        </div>
        <div className="sr-panel col-md-4">
          <img src={nahid} alt="" />
          <h5 className="mt-2 fs-4">Jubair Nahid</h5>
          <p className="">Managing Director</p>
        </div>
      </div>

      <div className="row">
        <div className="team-slide col-md-4">
          <img src={rajib} alt="" />
          <h5 className="mt-2">Md. Rajib Khan Raky</h5>
          <p className="">Senior Visa consultant</p>
        </div>
        <div className="team-slide col-md-4">
          <img src={bishal} alt="" />
          <h5 className="mt-2">Beshal Sutradhar</h5>
          <p className="">senior visa consultant</p>
        </div>
        <div className="team-slide col-md-4">
          <img src={shajib} alt="" />
          <h5 className="mt-2">Sajib Hossain</h5>
          <p className="">Ticket reservation officer</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
