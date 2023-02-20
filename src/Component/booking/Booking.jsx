import React from "react";
import book from "../../image/booking.jpg";
import "./Booking.css";

const Booking = () => {
  return (
    <div className="container booking">
      <div className="row gap-5">
        <div className="col-md-6">
          <img className="img-fluid" src={book} alt="" />
        </div>
        <div className="book-details col-md-5">
          <span>Get to know us</span>
          <h2>Plan Your Trip with seven star holidays</h2>
          <p className="text-muted">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don't look even slightly.
          </p>
          <ul>
            <li>Invest in your simply neighborhood</li>
            <li>Support people in free text extreme need</li>
            <li>Largest global industrial business community</li>
          </ul>

          <button className="border-0 p-2 btn-danger">Book now</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
