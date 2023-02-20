import React from "react";
import "./Country.css";
import india from "../../image/india.jpg";
import thailan from "../../image/thailan.jpg";
import singapor from "../../image/singapore.jpg";
import bangkok from "../../image/bangkok.jpg";
import malaysia from "../../image/malaysia.jpg";
import doctor from "../../image/doctor.jpg";

const Country = () => {
  return (
    <div className="country container text-center">
      <p className="dest">Your destination</p>
      <h4 className="title">Go Exotic Places</h4>

      {/* gallery */}

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div className="image-container">
            <img
              src={thailan}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <div className="text-container">
              <p>Thailand</p>
            </div>
          </div>

          <div className="image-container">
            <img
              src={doctor}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <div className="text-container">
              <p>medical consultancy</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="image-container">
            <img
              src={india}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
            <div className="text-container">
              <p>india</p>
            </div>
          </div>

          <div className="image-container">
            <img
              src={malaysia}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <div className="text-container">
              <p>malaysia</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="image-container">
            <img
              src={bangkok}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <div className="text-container">
              <p>bangkok</p>
            </div>
          </div>

          <div className="image-container">
            <img
              src={singapor}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <div className="text-container">
              <p>singapore</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Gallery --> */}
      {/* <div className="image-container">
        <img src={thailan} alt="" />
        <div className="text-container">
          <p>thailand</p>
        </div>
      </div> */}
    </div>
  );
};

export default Country;
