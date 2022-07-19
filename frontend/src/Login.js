import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);

      if (data) {
        navigate("/home");
      }
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
    }
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="login-password-wrapper">
            <input
              type="password"
              className="login-email-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="login-button" onClick={submitHandler}>
            Login
          </div>
          <Link to="/signup" className="login-to-signup-link">
            Don't have an account? Signup !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
