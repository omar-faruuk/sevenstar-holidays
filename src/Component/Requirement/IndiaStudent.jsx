import React from "react";
import Navbar from "../../Layout/Navabar/Navbar";
import "./Requirement.css";
import india from "../../image/india.jpg";
import Footer from "../Footer/Footer";
import { CiLight, CiWarning } from "react-icons/ci";

const IndiaStudent = () => {
  return (
    <div className="requirement">
      <Navbar />
      <div className="container-fluid bg-light">
        <img className="banner " src={india} alt="india" />
        <div className="container mt-5">
          <div className="row gap-4">
            <h1>Student Visa Only</h1>
            <div className="col-md-6 bg-white p-4">
              <h5>
                A tourist visa is an official document or stamp that authorizes
                an individual to enter a foreign country for the purpose of
                leisure and tourism.
              </h5>
              <h3 className="mt-5">
                Required Documents for Sticker visa (India)
              </h3>
              <ul className="mb-3">
                <b>Job Holder:</b>
                <li className="list">
                  Passport, in original, with a minimum validity of six months
                  as on the date of submission of application for visa. The
                  passport should have at least two (2) blank pages. Copy of the
                  passport ( Page no 2 & 3 ) should be attached. All old
                  passports must be submitted with the application form.
                </li>
                <li className="list">
                  One recent (not less than 3 months old) 2x2 (350x350 pixels)
                  colour photograph depicting full face with white background.
                </li>
                <li className="list">NID/Birth certificate,</li>
                <li className="list">
                  Utility Bill such as electricity, telephone, gas or water bill
                  (not more than 6 month old)
                </li>
                <li className="list">Formal admission letter.</li>
                <li className="list">Details of the University.</li>

                <li className="list">
                  Proof of Financial soundness: International travel card like
                  SBI Travel card / updated bank statement (last 3 month) /
                  endorsement* of foreign currency equivalent to US$150/- per
                  applicant ( Endorsement* should not be older than 1 (one)
                  month at the time of submission), International credit card
                  with running year endorsement in the passport.
                </li>

                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="card p-1">
                <div className="card-body">
                  <h4 className="card-title">
                    Sticker visa (India) Type:Sticker Visa
                  </h4>
                  <p class="card-text fw-light">Embassy fee: BDT 850/person</p>
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

export default IndiaStudent;
