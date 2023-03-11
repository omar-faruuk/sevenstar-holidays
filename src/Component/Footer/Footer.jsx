import React from "react";
import "./Footer.css";
import { FaFacebook, FaPhone, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdKeyboardArrowDown } from "react-icons/md";
import visa from "../../image/visa.png";
import master from "../../image/master.png";
import bkash from "../../image/bkash.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row gap-4">
          <div className="col-md-4">
            <h4>Seven Star Holidays</h4>
            <p>Welcome to Our Tours and Travel agency</p>
            <hr />

            <ul className="contact">
              <li>
                <FaPhone className="me-2" size={18} color="#fff" />
                01977305794
              </li>
              <li>
                <FaPhone className="me-2" size={18} color="#fff" />
                01614766666
              </li>

              <li>
                <MdEmail className="me-2" size={18} />
                7star.visa1@gmail.com
              </li>
              <li>
                <MdEmail className="me-2" size={18} />
                7star.tkt1@gmail.com
              </li>
              <li>
                <MdLocationPin className="me-2" size={18} color="fff" />
                Jamuna Future park, level 2,Dhaka-1229
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Explore</h4>
            <ul className="link">
              <li>Services</li>
              <li>Packages</li>
              <li>Ticketing</li>
              <li>Visa Consultancy</li>
              <li>Tour</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h4 className="text-capitalize">
              you can pay using
              <span className="d-inline">
                <MdKeyboardArrowDown size={30} color="#fff" />
              </span>
            </h4>
            <ul className="payment d-flex">
              <li>
                <img src={visa} alt="visa" />
              </li>
              <li>
                <img src={master} alt="master" />
              </li>
              <li>
                <img src={bkash} alt="bkash" />
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Follow us</h4>
            <ul className="social d-flex">
              <li className="me-2">
                <a
                  target="_blank"
                  href="https://web.facebook.com/sshtourstravels"
                >
                  <FaFacebook size={35} color="#3263a8" />
                </a>
              </li>

              <li className="me-2">
                <FaInstagram size={35} color="#962fbf" />
              </li>
              <li className="me-2">
                <a
                  target="_blank"
                  href="https://www.youtube.com/@sevenstarholidays/featured"
                >
                  <FaYoutube size={35} color="#FF0000" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
