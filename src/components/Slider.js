import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { data } from "../data/data";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFavorites } from "../stogre/addToLikes";
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

  const toggleFavoriteStatusHandler = (id) => {
    const isFavorite = favoritesContext.itemIsFavorite(id);
    const userFavorite = products.filter((product) => product.id !== id);
    if (isFavorite) {
      favoritesContext.removeFavorite(id);
    } else {
      favoritesContext.addFavorite({ userFavorite });
    }
  };
  console.log(favoritesContext.favorites);
  return (
    <section className="products-container">
      <Swiper {...params}>
        {products.map((singleProduct) => {
          const { img, title, price, id } = singleProduct;
          return (
            <div className="single-product" key={id}>
              <Link to={`/item/${id}`}>
                <img src={img} alt={title} className="headphone-pic" />
              </Link>
              <span
                className="like-icon"
                onClick={() => toggleFavoriteStatusHandler(id)}
              >
                <AiOutlineHeart />
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
