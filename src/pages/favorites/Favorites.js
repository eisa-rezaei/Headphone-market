import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useFavorites } from "../../stogre/addToLikes";
import "./Favorites.css";
const Favorites = () => {
  const favoritesContext = useFavorites();
  const favoriteProduct = favoritesContext.favorites;
  const RemoveFavoriteHandler = (id) => {
    const isFavorite = favoritesContext.itemIsFavorite(id);
    if (isFavorite) {
      return favoritesContext.removeFavorite(id);
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
          {favoriteProduct.map((product) => {
            const { title, img1, price, id } = product;
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
                  <span onClick={() => RemoveFavoriteHandler(id)}>
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

export default Favorites;
