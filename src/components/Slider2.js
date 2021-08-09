import React from "react";
import Swiper from "react-id-swiper";
import { data } from "../data/data";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAddToCard } from "../storage/addtoCard";

const Slider_2 = () => {
  // states
  const params = {
    spaceBetween: 20,
    slidesPerView: 1.5,
  };

  const { productCountReSet, isInCard } = useAddToCard();

  const productCountReSetHandler = (id) => () => {
    if (!isInCard(id)) {
      productCountReSet(0);
    }
  };
  return (
    <section className="products-container-list-2">
      <Swiper {...params}>
        {data.map(({ img1, title, price, id }) => {
          return (
            <Link
              to={`/item/${id}`}
              key={id}
              onClick={productCountReSetHandler(id)}
            >
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
