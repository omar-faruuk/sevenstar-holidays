import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="error d-flex flex-column justify-content-center align-items-center "
    >
      <h2 style={{ fontSize: "80px" }}>404</h2>
      <p>Page not found!!</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Error;
