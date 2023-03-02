import React from "react";
import "./Footer.css";
// import { FaFacebook, FaPhone, FaLocationOn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Seven Star Holidays</h5>
            <p>Welcome to Our Tours and Travel agency</p>
            <hr />

            <ul>
              <li>
                {/* <FaPhone size={22} color="#fff" /> */}
                01977305794
              </li>
              <li>7star.visa1gmail.com</li>
              <li>
                {/* <FaLocationOn size={18} color="fff" /> */}
                Jamuna Future park, lavel 2,Dhaka-1229
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Explore</h5>
            <ul>
              <li>Services</li>
              <li>Packages</li>
              <li>Ticketing</li>
              <li>Visa Consultancy</li>
              <li>Tour</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow us</h5>
            <ul>
              <li>{/* <FaFacebook size={32} color="#fff" /> */}</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
