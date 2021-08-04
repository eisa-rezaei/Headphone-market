import React from "react";
import { Link } from "react-router-dom";
import "./GetStartedPage.css";
const GetStartedPage = () => {
  return (
    <main className="getstarted-page">
      <div className="getstarted-title-container">
        <h2>
          enjoy your <span>music</span> time with classical <span>sound</span>
        </h2>
      </div>
      <div className="btn-container">
        <Link to="/listofproducts" className="gets-btn">
          get started
        </Link>
      </div>
    </main>
  );
};

export default GetStartedPage;
