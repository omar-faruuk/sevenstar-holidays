import React from "react";
import Navbar from "../../Layout/Navabar/Navbar";
import "./Requirement.css";
import dubai from "../../image/dubai2.jpg";
import Footer from "../Footer/Footer";
import { CiLight, CiWarning } from "react-icons/ci";

const Dubai = () => {
  return (
    <div className="requirement">
      <Navbar />
      <div className="container-fluid bg-light">
        <img
          style={{ objectFit: "cover", width: "100%", height: "50vh" }}
          className="banner-thailand"
          src={dubai}
          alt="thailand"
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
              {/* <h3 className="mt-5">
                Required Documents for Sticker visa (Singapore)
              </h3> */}
              <ul className="mb-3">
                <li className="list">
                  <b>Passport:</b>
                  <br /> TThe applicant needs to submit an original Passport
                  that was issued within 10 years. The passport must have six
                  months of validity after the intended date of departure. The
                  applicant’s current passport must have two empty/blank pages
                  back to back. Hand-written and alternation are not allowed.
                  Clear photocopy of the front page to the last page. If the
                  applicant used any pages before then he/she needs to submit
                  those pages clear copy also. If the applicant has an old
                  passport, he/she have to include that.
                </li>
                <li className="list">
                  <b>Visa Application Form:</b>
                  <br /> A Visa Application form must be filled with all the
                  proper information. The form must be filled with block letters
                  and signed by the applicant.
                </li>
                <li className="list">
                  <b>Photograph:</b>
                  <br />
                  Recently taken two passport-size photos (3.5mm X 4.5mm) that
                  need to submit. Photo should be taken recently with applicant
                  frontal-view and untouched with white background. Wearing
                  glass is not allowed when taking photos but prescription
                  eyewear is allowed.
                </li>
                <li className="list">
                  <b>Cover Letter:</b>
                  <br /> A personal letter from the applicant including personal
                  details, the purpose of the visit, and outlining who will be
                  responsible for the full costs of the trip. The letter should
                  be addressed to The Visa Officer, Embassy of United Arab
                  Emirates, Dhaka, Bangladesh. The Visa category must be
                  mentioned in the subject line.
                </li>
                <li className="list">
                  <b>Forwarding Letter:</b>
                  <br /> A letter from the employer’s office such as a NOC/LOI
                  letter on the organization’s letterhead pad stating the
                  applicant’s name, designation, passport number, applicant
                  purpose, and assigned roles during the visit, duration of the
                  visit, contact details, and other necessary details.
                </li>
                <li className="list">
                  <b>Plan of The Tour:</b>
                  <br /> Applicants need to submit all of his/her tour plans.
                  How many days he/she will stay, which place he/she will go to
                  and all other’s things.
                </li>
                <li className="list">
                  <b>Office ID Card:</b>
                  <br /> Copies of the office id card/visiting card need to
                  submit (3 copies).
                </li>
                <li className="list">
                  <b>Company Memorandum:</b>
                  <br /> The applicant needs a clear scanned copy of the Company
                  Memorandum if the applicant is the owner/managing director of
                  the company or employed as one of the directors in the
                  company.
                </li>
                <li className="list">
                  <b>Personal Bank Statements: </b>
                  <br /> The applicant must submit his/her personal bank
                  statement for the last six months. He/She also needs to
                  mention the Bank’s name and telephone number with an
                  authorized bank stamp and signature.
                </li>
                <li className="list">
                  <b>Personal ITR Certificate:</b>
                  <br /> Applicant must submit his/her last 3 years income tax
                  return certificate.
                </li>
                <li className="list">
                  <b>Company Bank Statements:</b>
                  <br /> Bank statements copy of the sponsoring company or party
                  for the last 6 months mentions the Bank’s name and telephone
                  number clearly with an authorized bank stamp and signature (If
                  the company sponsors the trip).
                </li>
                <li className="list">
                  <b>Company ITR Certificate:</b>
                  <br /> Applicant must submit the last 3 years Income Tax
                  Return certificate of the company he/she works for. The
                  license must be legalized by legal authorities (If the company
                  sponsors the trip).
                </li>
                <li className="list">
                  <b>Airline Ticket Itinerary:</b>
                  <br /> A reserved itinerary for the applicant’s airline ticket
                  as per the schedule of the trip and return from the trip.
                </li>
                <li className="list">
                  <b>Hotel Reservation:</b>
                  <br /> A reserved itinerary for the applicant’s accommodation.
                  He/She needs to mention the hotel or resort as per the
                  schedule of the trip.
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="card p-1">
                <div className="card-body">
                  <h4 className="card-title">
                    Sticker visa (Dubai) Type:Sticker Visa
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

export default Dubai;
