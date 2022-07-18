import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h3>Please Signup To Continue</h3>
        <div className="login-mid-wrapper">
          <div className="login-email-wrapper">
            <input
              type="text"
              className="login-email-field"
              placeholder="User Name"
            ></input>
          </div>
          <div className="login-email-wrapper">
            <input
              type="text"
              className="login-email-field"
              placeholder="Email Id"
            ></input>
          </div>
          <div className="login-password-wrapper">
            <input
              type="password"
              className="login-email-field"
              placeholder="Password"
            ></input>
          </div>

          <div className="login-button">Signup</div>
          <Link to="/login" className="login-to-signup-link">
            Already have an account? Login !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
