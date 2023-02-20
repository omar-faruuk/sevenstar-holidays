import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import student from "../../image/student.jpg";
import visa from "../../image/visa.jpg";
import medical from "../../image/medical.jpg";
import flight from "../../image/flight.jpg";
import train from "../../image/train.jpg";
import "./services.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 100,
    autoplay: true,
    // fade: true,
    slidesToShow: 4,
    initialSlide: 2,
    swipeToSlide: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "0px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div className="container-fluid services">
      <h4 className="title text-center">Most Popular Services</h4>

      <Slider {...settings}>
        <div className="slide">
          <img src={student} className="card-img img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Student Consultancy</h5>
            <p className="card-text text-muted fs-5">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        {/* card two */}
        <div className="slide">
          <img src={visa} className="card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Visa Processing</h5>
            <p className="card-text text-muted fs-5">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        {/* card three */}
        <div className="slide">
          <img src={flight} className="card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Air Ticketing</h5>
            <p className="card-text text-muted fs-5">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        {/* card four */}
        <div className="slide">
          <img src={train} className="card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Train Ticketing</h5>
            <p className="card-text text-muted fs-5">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        {/* card five */}
        <div className="slide">
          <img src={medical} className="card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Medical Appointment</h5>
            <p className="card-text text-muted fs-5">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Services;
