import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// icons
import { BiMinus, BiPlus, BiShoppingBag } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";
import { RiHeartAddLine } from "react-icons/ri";
// local data
import { useFavorites } from "../../storage/addToLikes";
import { useColorChange } from "../../storage/colorChange";
import { useAddToCard } from "../../storage/addtoCard";
import { data } from "../../data/data";
import "./ItemInfo.css";

// ***** component start ***** //

const ItemInfo = () => {
  // constants
  const { itemIsFavorite, removeFavorite, addFavorite } = useFavorites();
  const toggleFavoriteStatusHandler = (id) => () => {
    const changedId = parseInt(id);
    const userFavorite = data.filter((product) => product.id === changedId);
    if (itemIsFavorite(changedId)) {
      removeFavorite(changedId);
    } else {
      addFavorite(userFavorite);
    }
  };
  //adding to card
  const {
    countProduct,
    addProductCount,
    removeProductCount,
    removeProduct,
    addProduct,
    countProductChange,
    isInCard,
    cardProducts,
    productCountReSet,
    totalCount,
  } = useAddToCard();

  // states
  const [product, setProduct] = useState({});
  //params
  const { id } = useParams();

  useEffect(() => {
    const newProduct = data.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id]);

  const { title, img1, img2, img3, price, details } = product;

  const {
    isBlack,
    isGold,
    isBlue,
    changeColorIsBlack,
    changeColorIsBlue,
    changeColorIsGold,
  } = useColorChange();
  const imageSrcHandler = () => {
    if (isBlack) {
      return img1;
    }
    if (isGold) {
      return img2;
    }
    if (isBlue) {
      return img3;
    }
  };

  const params = {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  };

  const addToCardBtnHandler = () => {
    if (countProduct > 0 && !isInCard(product.id)) {
      addProduct(product);
    } else {
      countProductChange(parseInt(product.id));
    }
    changeColorIsBlack();
  };
  const removeFromCardBtnHandler = () => {
    removeProduct(product.id);
  };
  const showCountOfItemHandler = () => {
    const [singleProduct] = cardProducts.filter(
      (oneProduct) => oneProduct.id === product.id
    );
    if (isInCard(product.id)) {
      return singleProduct.count;
    } else {
      return countProduct;
    }
  };
  //component

  return (
    <main className="item-page">
      <header className="header-of-item">
        <Link key="1" to="/listofproducts" onClick={changeColorIsBlack}>
          <FiChevronLeft />
        </Link>
        <Link key="2" to="/card" onClick={changeColorIsBlack}>
          <span className="cardcunter">{totalCount}</span>
          <BiShoppingBag />
        </Link>
      </header>
      <div className="item-img-container">
        <Swiper {...params}>
          <div className="item-single-pic" key="1">
            <img
              src={imageSrcHandler()}
              alt={title}
              className="headphone-pic-item"
              id="1"
            />
          </div>
          <div className="item-single-pic" key="2">
            <img
              src={imageSrcHandler()}
              alt={title}
              className="headphone-pic-item"
              id="2"
            />
          </div>
          <div className="item-single-pic" key="3">
            <img
              src={imageSrcHandler()}
              alt={title}
              className="headphone-pic-item"
              id="3"
            />
          </div>
        </Swiper>
        <div className="item-change-color">
          <span className="color-link1" onClick={changeColorIsBlack}>
            {isBlack && <p />}
          </span>
          <span className="color-link2" onClick={changeColorIsGold}>
            {isGold && <p />}
          </span>
          <span className="color-link3" onClick={changeColorIsBlue}>
            {isBlue && <p />}
          </span>
        </div>
      </div>
      <div className="add-to-card-part">
        <header className="item-title-product">
          <h3>{title}</h3>
          <span
            className={
              itemIsFavorite(parseInt(id))
                ? `item-like-icon active`
                : `item-like-icon `
            }
            onClick={toggleFavoriteStatusHandler(id)}
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
            <h2>$ {price} </h2>
            <div className="add-card-count">
              <span
                onClick={() => {
                  removeProductCount();
                  removeFromCardBtnHandler(product.id);
                }}
              >
                <BiMinus />
              </span>
              <h3>{showCountOfItemHandler()}</h3>
              <span
                onClick={() => {
                  addProductCount();
                  removeFromCardBtnHandler(product.id);
                }}
              >
                <BiPlus />
              </span>
            </div>
          </div>
        </div>
        <div className="item-btn-container">
          <button
            className={
              isInCard(product.id) && countProduct > 0
                ? `items-btn focused`
                : `items-btn`
            }
            onClick={() => {
              if (!isInCard(product.id) && countProduct !== 0) {
                addToCardBtnHandler();
              } else {
                removeFromCardBtnHandler(product.id);
                productCountReSet(0);
              }
            }}
          >
            {isInCard(product.id) && countProduct > 0
              ? `remove from card`
              : `add to card`}
          </button>
        </div>
      </div>
    </main>
  );
};

// ***** component end ***** //

export default ItemInfo;
