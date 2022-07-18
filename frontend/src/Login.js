import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h3>Please Login To Continue</h3>
        <div className="login-mid-wrapper">
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

          <div className="login-button">Login</div>
          <Link to="/signup" className="login-to-signup-link">
            Don't have an account? Signup !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
