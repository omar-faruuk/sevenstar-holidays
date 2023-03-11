import React from "react";
import Navbar from "../../Layout/Navabar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 text-center">
            <h2 className="name">seven star holidays</h2>
            <p className="brand">your journey begins here</p>
          </div>

          {/* form */}
          <div className="col-md-12">
            <form className="form p-2 d-flex  bg-white">
              <div className="col-md-3 border-end">
                <label for="exampleInputEmail1" className="form-label">
                  Where to
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter country"
                />
              </div>
              <div className="col-md-3 border-end">
                <label for="exampleInputPassword1" className="form-label">
                  When
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="col-md-3 border-end">
                <label for="exampleInputPassword1" className="form-label">
                  Type
                </label>
                <select
                  className="form-select border-0"
                  aria-label="Default select example"
                >
                  <option selected value="1">
                    Tourist
                  </option>
                  <option value="2">Business</option>
                  <option value="3">Student</option>
                </select>
              </div>

              <button
                type="submit"
                className="text-uppercase col-md-3  btn btn-danger"
              >
                Find now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
