import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAddToCard } from "../../storage/addtoCard";
import "./Card.css";

// ***** component start ***** //

const Card = () => {
  const { cardProducts, removingProduct, isInCard } = useAddToCard([]);
  const removingProductHanlder = (id) => () => {
    if (isInCard(id)) {
      removingProduct(id);
    }
  };
  const payPrice = (price, count) => {
    const total = price * count;
    return total;
  };

  let sum = 0;
  cardProducts.forEach(({ count, price }) => {
    sum += count * price;
  });

  return (
    <main className="card-page">
      <header className="header-of-card">
        <Link key="1" to="/listofproducts">
          <FiChevronLeft />
        </Link>
      </header>
      <ul className="card-items-container">
        <h3>your card products</h3>
        {cardProducts.map(({ title, img1, price, id, count }) => (
          <li className="card-single-product" key={id}>
            <Link to={`/item/${id}`}>
              <img src={img1} alt={title} className="headphone-pic-list-2" />
            </Link>
            <div className="card-product-description">
              <span
                onClick={removingProductHanlder(id)}
                className="delete-from-card-icon"
              >
                <HiOutlineMinusSm />
              </span>
              <h5>{title}</h5>
              <div className="prices-total-box">
                <h4>
                  {price} ✖︎{"  "}
                </h4>
                <h4> {count} =</h4>
                <span>{payPrice(price, count)} $</span>
              </div>
              <Link to={`/item/${id}`}>
                <BsArrowRight />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="pay-with-credit">
        <div className="cards-total-price">
          <h4>total price is {sum} $</h4>
        </div>
        <div className="card-btn-container">
          <Link to="/card" className="card-btn">
            pay with credit
          </Link>
        </div>
      </div>
    </main>
  );
};
// ***** component ends ***** //

export default Card;
