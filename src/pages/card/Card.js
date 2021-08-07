import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAddToCard } from "../../storage/addtoCard";
import "./Card.css";

// ***** component start ***** //

const Card = () => {
  const { cardProducts } = useAddToCard([]);
  return (
    <main className="card-page">
      <header className="header-of-card">
        <Link key="1" to="/listofproducts">
          <FiChevronLeft />
        </Link>
      </header>
      <ul className="card-items-container">
        {cardProducts.map(({ title, img1, price, id }) => {
          return (
            <li className="card-single-product" key={id}>
              <Link to={`/item/${id}`}>
                <img src={img1} alt={title} className="headphone-pic-list-2" />
              </Link>
              <div className="card-product-description">
                {/* <span onClick={removeFavoriteHandler(id)}>
                  <HiOutlineMinusSm />
                </span> */}
                <h5>{title}</h5>
                <h4>{price}</h4>
                <Link to={`/item/${id}`}>
                  <BsArrowRight />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
// ***** component ends ***** //

export default Card;
