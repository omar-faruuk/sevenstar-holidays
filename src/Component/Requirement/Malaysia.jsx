import React from "react";
import Navbar from "../../Layout/Navabar/Navbar";
import "./Requirement.css";
import malaysia from "../../image/malaysia.jpg";
import Footer from "../Footer/Footer";
import { CiLight, CiWarning } from "react-icons/ci";

const Malaysia = () => {
  return (
    <div className="requirement">
      <Navbar />
      <div className="container-fluid bg-light">
        <img
          style={{ objectFit: "cover", width: "100%", height: "50vh" }}
          className="banner-thailand "
          src={malaysia}
          alt="malaysia"
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
                Required Documents for Sticker visa (Malaysia)
              </h3>
              <ul className="mb-3">
                <b>Job Holder:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">Visiting card</li>
                <li className="list">No objection certificate (NOC)</li>
                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
                <li className="list">Employee Id card copy (One photo copy)</li>
                <li className="list">
                  Salary bank statement (Last 06 months) and bank solvency
                  certificate or salary certificate or pay slip
                </li>
                <li className="list">Personal bank solvency certificate</li>
                <li className="list">
                  Personal bank statement of last 06 months and minimum balance
                  BDT 20,000 for each applicant.
                </li>
              </ul>

              <ul className="mb-3">
                <b>Businessman:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">
                  Personal or Company bank statement of last 06 months and
                  minimum balance BDT 20,000 for each applicant
                </li>
                <li className="list">
                  Renewal trade license copy with notary public (english
                  translated)
                </li>
                <li className="list">Visiting card</li>
                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
                <li className="list">
                  Memorandum for limited company form page XII (One photo copy)
                </li>
                <li className="list">Company letter head pad</li>
                <li className="list">
                  Personal or company bank solvency certificate
                </li>
              </ul>

              <ul className="mb-3">
                <b>Govt Job Holder:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">Visiting card</li>
                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
                <li className="list">Employee Id card copy (One photo copy)</li>
                <li className="list">
                  Salary bank statement (Last 06 months) and bank solvency
                  certificate or salary certificate or pay slip
                </li>
                <li className="list">Personal bank solvency certificate</li>
                <li className="list">
                  Personal bank statement of last 06 months and minimum balance
                  BDT 70,000 for each applicant.
                </li>
                <li className="list">
                  GO (Government order) for official passport
                </li>
              </ul>

              <ul className="mb-3">
                <b>Doctor:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">Visiting card</li>
                <li className="list">
                  BMDC certificate for doctor (Scan copy)
                </li>
                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
                <li className="list">Personal bank solvency certificate</li>
                <li className="list">
                  Personal bank statement of last 06 months and minimum balance
                  BDT 70,000 for each applicant.
                </li>
              </ul>

              <ul className="mb-3">
                <b>Advocate _ Lawyer:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">Visiting card</li>
                <li className="list">
                  BAR council certificate (One photo copy)
                </li>
                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
                <li className="list">Personal bank solvency certificate</li>
                <li className="list">
                  Personal bank statement of last 06 months and minimum balance
                  BDT 70,000 for each applicant.
                </li>
              </ul>

              <ul className="mb-3">
                <b>Student:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">ID card (Student) one photo copy</li>
                <li className="list">
                  Leave letter from school or collage original copy
                </li>
                <li className="list">
                  Parents bank statement (Last 06 months) & solvency certificate
                  ( Minimum balance BDT 70,000 for each applicant )
                </li>
              </ul>

              <ul className="mb-3">
                <b>Non-student Child:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">Birth certificate</li>
                <li className="list">
                  Parents bank statement (Last 06 months) & solvency certificate
                  ( Minimum balance BDT 70,000 for each applicant )
                </li>
              </ul>

              <ul className="mb-3">
                <b>Housewife:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
                <li className="list">Personal bank solvency certificate</li>
                <li className="list">
                  Personal bank statement of last 06 months and minimum balance
                  BDT 70,000 for each applicant.
                </li>
              </ul>

              <ul className="mb-3">
                <b>Retired person:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">
                  Retirement document (Retired Person) one photo copy
                </li>
                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
                <li className="list">Personal bank solvency certificate</li>
                <li className="list">
                  Personal bank statement of last 06 months and minimum balance
                  BDT 70,000 for each applicant.
                </li>
              </ul>

              <ul className="mb-3">
                <b>Unemployed:</b>
                <li className="list">
                  07 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 2 copy photograph taken in last 3 months (white
                  background only, photo size 35 mm X 45 mm)
                </li>
                <li className="list">Personal bank solvency certificate</li>
                <li className="list">
                  Personal bank statement of last 06 months and minimum balance
                  BDT 70,000 for each applicant.
                </li>
                <li className="list">
                  NID or birth certificate (must) one photo copy
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="card p-1">
                <div className="card-body">
                  <h4 className="card-title">
                    Sticker visa (Malaysia) Type:Sticker Visa
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

export default Malaysia;
