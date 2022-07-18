import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-logo-wrapper">
        <div className="navbar-logo-outer">
          <div className="navbar-logo-mid">
            <div className="navbar-logo-inner"></div>
          </div>
        </div>
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
