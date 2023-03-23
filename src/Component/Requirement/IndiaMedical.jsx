import React from "react";
import Navbar from "../../Layout/Navabar/Navbar";
import "./Requirement.css";
import india from "../../image/india.jpg";
import Footer from "../Footer/Footer";
import { CiLight, CiWarning } from "react-icons/ci";

const IndiaMedical = () => {
  return (
    <div className="requirement">
      <Navbar />
      <div className="container-fluid bg-light">
        <img className="banner " src={india} alt="india" />
        <div className="container mt-5">
          <div className="row gap-4">
            <h1>Medical Visa Only</h1>
            <div className="col-md-6 bg-white p-4">
              <h5>
                A Medical visa is an official document or stamp that grants
                access to India to all visitors wishing to receive medical
                treatment in the country. This document can only be used for
                medical reasons, and these treatments or procedures must be
                authorized by a recognized medical center in India.
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
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>
                <li className="list">No objection certificate (NOC)</li>
                <li className="list">Employee Id card copy (One photo copy)</li>

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

              <ul className="mb-3">
                <b>Businessman:</b>
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
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>
                <li className="list">
                  Renewal trade license copy with notary public (english
                  translated)
                </li>
                <li className="list">Visiting card</li>

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

              <ul className="mb-3">
                <b>Housewife:</b>
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
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>
                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
                <li className="list">
                  Proof of Financial soundness: International travel card like
                  SBI Travel card / updated bank statement (last 3 month) /
                  endorsement* of foreign currency equivalent to US$150/- per
                  applicant ( Endorsement* should not be older than 1 (one)
                  month at the time of submission), International credit card
                  with running year endorsement in the passport.
                </li>
              </ul>

              <ul className="mb-3">
                <b>Student:</b>
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
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>
                <li className="list">ID card (Student) one photo copy</li>
                <li className="list">
                  Leave letter from school or collage original copy
                </li>
                <li className="list">
                  Parents bank statement (Last 06 months) & solvency certificate
                  ( Minimum balance BDT 20,000 for each applicant )
                </li>
              </ul>

              <ul className="mb-3">
                <b>Govt Job Holder:</b>
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
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>
                <li className="list">
                  GO (Government order) for official passport
                </li>
                <li className="list">Employee Id card copy (One photo copy)</li>
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

              <ul className="mb-3">
                <b>Doctor:</b>
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
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>
                <li className="list">
                  BMDC certificate for doctor (Scan copy)
                </li>
                <li className="list">Employee Id card copy (One photo copy)</li>
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

              <ul className="mb-3">
                <b>Advocate _ Lawyer:</b>
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
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>
                <li className="list">
                  BAR council certificate (One photo copy)
                </li>
                <li className="list">Employee Id card copy (One photo copy)</li>
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

              <ul className="mb-3">
                <b>Non-student Child:</b>
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
                <li className="list">Birth certificate</li>
                <li className="list">
                  Utility Bill such as electricity, telephone, gas or water bill
                  (not more than 6 month old)
                </li>
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>

                <li className="list">
                  Parents bank statement (Last 06 months) & solvency certificate
                  ( Minimum balance BDT 20,000 for each applicant )
                </li>
              </ul>

              <ul className="mb-3">
                <b>Retired person:</b>
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
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>
                <li className="list">
                  Retirement document (Retired Person) one photo copy
                </li>
                <li className="list">
                  Marriage certificate copy (if spouse name not mentioned in the
                  passport)
                </li>
                <li className="list">
                  Proof of Financial soundness: International travel card like
                  SBI Travel card / updated bank statement (last 3 month) /
                  endorsement* of foreign currency equivalent to US$150/- per
                  applicant ( Endorsement* should not be older than 1 (one)
                  month at the time of submission), International credit card
                  with running year endorsement in the passport.
                </li>
              </ul>

              <ul className="mb-3">
                <b>Unemployed:</b>
                <li className="list">
                  06 Months Valid Passport With Old Passport (If have)
                </li>
                <li className="list">
                  Recent 1 copy photograph taken in last 3 months (white
                  background only, photo size 2x2)
                </li>
                <li className="list">
                  Medical Invitation letter from India with specific date
                </li>
                <li className="list">All Medical original documents</li>
                <li className="list">Personal bank solvency certificate</li>
                <li className="list">
                  Personal bank statement of last 06 months and minimum balance
                  BDT 20,000 for each applicant.
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

export default IndiaMedical;
