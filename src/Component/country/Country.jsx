import React from "react";
import "./Country.css";
import india from "../../image/india.jpg";
import thailan from "../../image/thailan.jpg";
import singapor from "../../image/singapore.jpg";
import usa from "../../image/usa.jpg";
import malaysia from "../../image/malaysia.jpg";
import dubai from "../../image/dubai.jpg";
import { useNavigate } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Country = () => {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route);
    console.log(route);
  };

  return (
    <div id="country" className="country container text-center">
      <p className="dest">Your destination</p>
      <h4 className="title">Go Exotic Places</h4>
      <MessengerCustomerChat
        pageId="112421340608702>"
        appId="624425182379220"
      />

      {/* gallery */}

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div
            onClick={() => handleRoute("thailand/tourist")}
            className="image-container"
          >
            <img
              src={thailan}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <div className="text-container">
              <p>Thailand</p>
            </div>
          </div>

          <div
            onClick={() => handleRoute("dubai/tourist")}
            className="image-container"
          >
            <img
              src={dubai}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <div className="text-container">
              <p>Dubai</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div
            onClick={() => handleRoute("india/tourist")}
            className="image-container"
          >
            <img
              src={india}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
            <div className="text-container">
              <p>india</p>
            </div>
          </div>

          <div
            onClick={() => handleRoute("malaysia/tourist")}
            className="image-container"
          >
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
          <div
            onClick={() => handleRoute("usa/tourist")}
            className="image-container"
          >
            <img
              src={usa}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <div className="text-container">
              <p>usa</p>
            </div>
          </div>

          <div
            onClick={() => handleRoute("singapore/tourist")}
            className="image-container"
          >
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
