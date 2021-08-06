import React from "react";
import { Link } from "react-router-dom";
// icons
import { BsArrowRight } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";
//local data
import { useFavorites } from "../../storage/addToLikes";
import "./Favorites.css";

// ***** component start ***** //

const Favorites = () => {
  const { removeFavorite, itemIsFavorite, favorites } = useFavorites(); // خارج کردن به صورت ابجکت
  const removeFavoriteHandler = (id) => () => {
    if (itemIsFavorite(id)) {
      return removeFavorite(id);
    }
  };
  return (
    <main className="favorites-page">
      <header className="header-of-favorites">
        <Link key="1" to="/listofproducts">
          <FiChevronLeft />
        </Link>
      </header>
      <section className="favorites-container">
        <h3>your favorites products</h3>
        <ul className="favorite-items-container">
          {favorites.map(({ title, img1, price, id }) => {
            return (
              <li className="favorite-single-product" key={id}>
                <Link to={`/item/${id}`}>
                  <img
                    src={img1}
                    alt={title}
                    className="headphone-pic-list-2"
                  />
                </Link>
                <div className="favorites-product-description">
                  <span onClick={removeFavoriteHandler(id)}>
                    <HiOutlineMinusSm />
                  </span>
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
      </section>
    </main>
  );
};

// ***** component ends ***** //

export default Favorites;
