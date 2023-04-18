import React from "react";
import book from "../../image/booking.jpg";
import "./Booking.css";
import { AiOutlineSetting } from "react-icons/ai";
import { BsAirplaneFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
const Booking = () => {
  return (
    <div id="booking" className="container booking">
      <div className="row gap-5">
        <div className="col-md-6">
          <img className="img-fluid" src={book} alt="" />
        </div>
        <div className="book-details col-md-5">
          <span>Get to know us</span>
          <h2>Book your air ticket with seven star holidays</h2>
          <p className="text-muted">
            Seven star holidays is a reliable travel agent in Bangladesh. We
            offers great deals on air tickets. Book flights for all destinations
            across India or the world at the lowest airfares with us.
          </p>
          <ul id="booking-list">
            <li>
              <AiOutlineSetting size={18} /> Visa Processing
            </li>
            <li>
              <BsAirplaneFill size={18} /> Ticket booking
            </li>
            <li>
              <FaHotel size={18} /> Hotel booking
            </li>
          </ul>

          <a href="tel:09613751991">
            <button className="border-0 p-2 btn-danger rounded-2">
              <BsFillTelephoneFill size={20} /> Book now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;
