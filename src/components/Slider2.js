import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { data } from "../data/data";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Slider_2 = () => {
  const [products] = useState(data);
  const params = {
    spaceBetween: 20,
    slidesPerView: 1.5,
  };

  return (
    <section className="products-container-list-2">
      <Swiper {...params}>
        {products.map((singleProduct) => {
          const { img1, title, price, id } = singleProduct;
          return (
            <Link to={`/item/${id}`} key={id}>
              <div className="single-product-list-2">
                <img src={img1} alt={title} className="headphone-pic-list-2" />
                <div className="product-description-list-2">
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

export default Slider_2;
