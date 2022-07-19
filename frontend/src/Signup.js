import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users",
        {
          name,
          email,
          password,
        },
        config
      );
      console.log(data);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate]);

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
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
            Signup
          </div>
          <Link to="/login" className="login-to-signup-link">
            Already have an account? Login !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
