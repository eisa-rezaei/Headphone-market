import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Card.css";
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

export default Card;
