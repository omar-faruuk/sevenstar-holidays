import React, { useState } from "react";
import Navbar from "../../Layout/Navabar/Navbar";
import "./Header.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { computeHeadingLevel } from "@testing-library/react";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const country = e.target.country.value;
    const type = e.target.type.value;
    navigate(country + "/" + type);
  };

  return (
    <div className="header">
      <Navbar />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 textBox text-center">
            <h2 className="name">seven star holidays</h2>
            <p className="brand">your journey begins here</p>
          </div>

          {/* form */}
          <div className="col-md-12 formContainer">
            <form
              onSubmit={handleSubmit}
              className="form p-md-2 d-md-flex  bg-white"
            >
              <div className="col-md-3 form-box border-md-end">
                <label for="exampleInputEmail1" className="form-label">
                  Where to
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter country"
                  required
                  name="country"
                />
              </div>
              <div className="col-md-3 form-box border-md-end">
                <label for="exampleInputPassword1" className="form-label">
                  From
                </label>
                <input
                  type="text"
                  className="form-control disabled"
                  id="disabledTextInput"
                  placeholder="Bangladesh"
                  disabled
                  required
                />
              </div>
              <div className="col-md-3 form-box border-md-end">
                <label for="exampleInputPassword1" className="form-label">
                  Type
                </label>
                <select
                  name="type"
                  className="form-select border-0"
                  aria-label="Default select example"
                >
                  <option selected value="Tourist">
                    Tourist
                  </option>
                  <option value="medical">Medical</option>
                  <option value="doubleEntry">Double Entry</option>
                  <option value="Business">Business</option>
                  <option value="Student">Student</option>
                </select>
              </div>

              <button
                type="submit"
                className="text-uppercase col-md-3 btn btn-danger"
              >
                Find now
                {/* <Link className="w-100 text-white" to={route}>
                 
                </Link> */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
