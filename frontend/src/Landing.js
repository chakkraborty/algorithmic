import React from "react";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing-center-col">
      <h2 className="landing-page-heading">Content</h2>
      <div className="landing-page-card-wrapper array">
        <h3>Prerequisites</h3>
      </div>
      <div className="landing-page-card-wrapper array">
        <h3>Arrays</h3>
      </div>
      <div className="landing-page-card-wrapper linkedlist">
        <h3>Linkedlist</h3>
      </div>
      <div className="landing-page-card-wrapper searching">
        <h3>Searching and Sorting </h3>
      </div>
      <div className="landing-page-card-wrapper stack">
        <h3>Stacks and Queue</h3>
      </div>
      <div className="landing-page-card-wrapper hashmap">
        <h3>Hashmap</h3>
      </div>
      <div className="landing-page-card-wrapper string">
        <h3>String</h3>
      </div>
      <div className="landing-page-card-wrapper recursion">
        <h3>Recursion</h3>
      </div>
      <div className="landing-page-card-wrapper backtracking">
        <h3>Backtracking</h3>
      </div>
    </div>
  );
};

export default Landing;
