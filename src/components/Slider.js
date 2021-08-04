import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { data } from "../data/data";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
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

  return (
    <section className="products-container">
      <Swiper {...params}>
        {products.map((singleProduct, index) => {
          const { img, title, price, id } = singleProduct;
          return (
            <Link to={`/item/${id}`} key={id}>
              <div className="single-product">
                <img src={img} alt={title} className="headphone-pic" />
                <span className="like-icon">
                  <AiOutlineHeart />
                </span>
                <div className="product-description">
                  <h5>{title}</h5>
                  <h4>{price}</h4>
                  <span>
                    <BsArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Slider;
