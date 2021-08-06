import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { BiMinus, BiPlus, BiShoppingBag } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";
import { useParams } from "react-router";
import { data } from "../../data/data";
import { Link } from "react-router-dom";
import { RiHeartAddLine } from "react-icons/ri";
import { useFavorites } from "../../stogre/addToLikes";
import "./ItemInfo.css";
import { useColorChanging } from "../../stogre/colorChangeing";

// ***** component start ***** //

const ItemInfo = () => {
  const colors = useColorChanging();

  const favoritesContext = useFavorites();
  const toggleFavoriteStatusHandler = (id) => {
    const changedId = parseInt(id);
    const isFavorite = favoritesContext.itemIsFavorite(changedId);
    const userFavorite = data.filter((product) => product.id === changedId);
    if (isFavorite) {
      favoritesContext.removeFavorite(changedId);
    } else {
      favoritesContext.addFavorite(userFavorite);
    }
    console.log(favoritesContext.favorites);
  };
  const [product, setProduct] = useState("default droduct");
  const [count, setCount] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const newProduct = data.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id]);

  const { title, img1, img2, img3, price, details } = product;

  const imageHandler = () => {
    if (colors.isBlack) {
      return img1;
    }
    if (colors.isGold) {
      return img2;
    }
    if (colors.isBlue) {
      return img3;
    }
  };

  const params = {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <main className="item-page">
      <header className="header-of-item">
        <Link key="1" to="/listofproducts">
          <FiChevronLeft />
        </Link>
        <Link key="2" to="/card">
          <BiShoppingBag />
        </Link>
      </header>
      <div className="item-img-container">
        <Swiper {...params}>
          <div className="item-single-pic">
            <img
              src={imageHandler()}
              alt={title}
              className="headphone-pic-item"
              id="1"
            />
          </div>
          <div className="item-single-pic">
            <img
              src={imageHandler()}
              alt={title}
              className="headphone-pic-item"
              id="2"
            />
          </div>
          <div className="item-single-pic">
            <img
              src={imageHandler()}
              alt={title}
              className="headphone-pic-item"
              id="3"
            />
          </div>
        </Swiper>
        <div className="item-change-color">
          <Link className="color-link1" onClick={colors.colorIsBlack}>
            <p />
          </Link>
          <Link className="color-link2" onClick={colors.colorIsGold}>
            <p />
          </Link>
          <Link className="color-link3" onClick={colors.colorIsBlue}>
            <p />
          </Link>
        </div>
      </div>
      <div className="add-to-card-part">
        <header className="item-title-product">
          <h3>{title}</h3>
          <span
            className={
              favoritesContext.itemIsFavorite(parseInt(id))
                ? `item-like-icon active`
                : `item-like-icon `
            }
            onClick={() => toggleFavoriteStatusHandler(id)}
          >
            <RiHeartAddLine />
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
// ***** component end ***** //

export default ItemInfo;
