import React from "react";
import Slider from "react-slick";
import "./Team.css";
import bishal from "../../image/bishal.jpeg";
import shajib from "../../image/shajib.jpg";
import nahid from "../../image/nahid.jpg";
import shohel from "../../image/shohel.jpeg";

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
    <div id="team" className="container team text-center">
      <h4>Meet our Team</h4>
      <div className="row gap-5  d-flex justify-content-around">
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
    </div>
  );
}

export default Team;
