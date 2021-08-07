import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { data } from "../data/data";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFavorites } from "../storage/addToLikes";
import { RiHeartAddLine } from "react-icons/ri";
// import "../pages/products/Products.css";

const Slider = () => {
  const [products] = useState(data);
  const params = {
    spaceBetween: 20,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    slidesPerView: 1.5,
  };

  const favoritesContext = useFavorites();

  const toggleFavoriteStatusHandler = (id) => () => {
    const isFavorite = favoritesContext.itemIsFavorite(id); //sending id for the checking favorite
    const userFavorite = products.filter((product) => product.id === id); //getting that spicific item
    if (isFavorite) {
      favoritesContext.removeFavorite(id);
    } else {
      favoritesContext.addFavorite(userFavorite);
    }
  };
  return (
    <section className="products-container">
      <Swiper {...params}>
        {products.map(({ img1, title, price, id }) => {
          return (
            <div className="single-product" key={id}>
              <Link to={`/item/${id}`}>
                <img src={img1} alt={title} className="headphone-pic" />
              </Link>
              <span
                className={
                  favoritesContext.itemIsFavorite(id)
                    ? `like-icon active`
                    : `like-icon `
                }
                onClick={toggleFavoriteStatusHandler(id)}
              >
                <RiHeartAddLine />
              </span>
              <div className="product-description">
                <h5>{title}</h5>
                <h4>{price}</h4>
                <Link to={`/item/${id}`}>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Slider;
