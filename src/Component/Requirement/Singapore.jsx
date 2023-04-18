import React from "react";
import Navbar from "../../Layout/Navabar/Navbar";
import "./Requirement.css";
import singapore from "../../image/singapore2.jpg";
import Footer from "../Footer/Footer";
import { CiLight, CiWarning } from "react-icons/ci";

const Singapore = () => {
  return (
    <div className="requirement">
      <Navbar />
      <div className="container-fluid bg-light">
        <img
          style={{ objectFit: "cover", width: "100%", height: "50vh" }}
          className="banner-thailand "
          src={singapore}
          alt="singapore"
        />
        <div className="container mt-5">
          <div className="row gap-4">
            <h1>Tourist Visa Only</h1>
            <div className="col-md-6 bg-white p-4">
              <h5>
                A tourist visa is an official document or stamp that authorizes
                an individual to enter a foreign country for the purpose of
                leisure and tourism.
              </h5>
              <h3 className="mt-5">
                Required Documents for Sticker visa (Singapore)
              </h3>
              <ul className="mb-3">
                <b>Job Holder:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>

              <ul className="mb-3">
                <b>Businessman:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>

              <ul className="mb-3">
                <b>Govt Job Holder:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>

              <ul className="mb-3">
                <b>Doctor:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>

              <ul className="mb-3">
                <b>Advocate _ Lawyer:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>

              <ul className="mb-3">
                <b>Student:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>

              <ul className="mb-3">
                <b>Non-student Child:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>

              <ul className="mb-3">
                <b>Housewife:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>

              <ul className="mb-3">
                <b>Retired person:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>

              <ul className="mb-3">
                <b>Unemployed:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="card p-1">
                <div className="card-body">
                  <h4 className="card-title">
                    Sticker visa (Singapore) Type:Sticker Visa
                  </h4>
                  <p class="card-text fw-light">
                    Service charge: BDT 5200/person
                  </p>
                  <small className="text-warning">
                    <CiWarning color="#FFB233" size={19} />
                    Visa fee & service charge can be change
                  </small>
                  <a href="#" className="btn mt-3 d-block btn-primary">
                    Contact now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Singapore;
