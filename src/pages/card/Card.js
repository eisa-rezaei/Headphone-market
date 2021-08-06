import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Card.css";

// ***** component start ***** //

const Card = () => {
  return (
    <main className="card-page">
      <header className="header-of-card">
        <Link key="1" to="/listofproducts">
          <FiChevronLeft />
        </Link>
      </header>
    </main>
  );
};
// ***** component ends ***** //

export default Card;
