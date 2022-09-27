import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import img from "./quantlogo.png";
const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-left-wrapper">
        <img src={img} className="navbar-logo"></img>
        <h2>AlgoRithmic</h2>
      </div>

      <div className="navbar-search-wrapper">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="navbar-search-field"
          placeholder="Search"
        ></input>
      </div>
      <div className="navbar-dropdown-wrapper">
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Navbar;
