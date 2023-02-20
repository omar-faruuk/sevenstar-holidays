import React from "react";
import "./Navbar.css";
import logo from "../../image/Logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar container-fluid bg-white">
      <nav className="navbar navbar-expand-lg bg-body-tertiary container">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            <img className="img-fluid" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                Visa
              </a>
              <a className="nav-link" href="/">
                Tour
              </a>
              <a className="nav-link" href="/">
                Booking
              </a>
              <a className="nav-link" href="/">
                Student consultant
              </a>
              <a className="nav-link" href="/">
                Testimonials
              </a>
              <a className="nav-link" href="/">
                Team
              </a>
              <a className="nav-link" href="/">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
