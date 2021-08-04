import React, { useState, useEffect } from "react";
import { data } from "../../data/data";
import { BiMinus, BiPlus, BiShoppingBag } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ItemInfo.css";
import { AiOutlineHeart } from "react-icons/ai";

const ItemInfo = () => {
  const [product, setProduct] = useState("default droduct");
  const [count, setCount] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const newProduct = data.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id]);
  const { title, img, price, details } = product;
  return (
    <main className="item-page">
      <div className="item-img-container">
        <header className="header-of-item">
          <Link key="1" to="/listofproducts">
            <FiChevronLeft />
          </Link>
          <Link key="2" to="/card">
            <BiShoppingBag />
          </Link>
        </header>
        <img src={img} alt={title} className="headphone-pic-item" />
      </div>
      <div className="add-to-card-part">
        <header className="item-title-product">
          <h3>{title}</h3>
          <span className="item-like-icon">
            <AiOutlineHeart />
          </span>
        </header>
        <div className="item-stars-container">
          ⭐️⭐️⭐️⭐️⭐️ <span className="stars-point">(4.6/5)</span>
        </div>
        <div className="item-details">
          <h4>product details</h4>
          <p>{details}</p>
        </div>
        <div className="item-price-card">
          <h4>price</h4>
          <div className="item-addcard-price">
            <h2>{price}</h2>
            <div className="add-card-count">
              <span
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
              >
                <BiMinus />
              </span>
              <h3>{count}</h3>
              <span onClick={() => setCount(count + 1)}>
                <BiPlus />
              </span>
            </div>
          </div>
        </div>
        <div className="item-btn-container">
          <Link to="/listofproducts" className="items-btn">
            add to card
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ItemInfo;
