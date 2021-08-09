import React from "react";
import { Link } from "react-router-dom";
// icons
import { IoGridOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineAdjustments } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
//local data
import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider2";
import { useFavorites } from "../../storage/addToLikes";
import { useAddToCard } from "../../storage/addtoCard";
import "./Products.css";

// ***** component start ***** //
const Products = () => {
  const favorites = useFavorites();
  const { countProduct } = useAddToCard();

  return (
    <main className="products-page">
      <header className="header-of-products">
        <Link key="1" to="/">
          <IoGridOutline />
        </Link>
        <Link key="2" to="/card">
          <span className="cardcunter">{countProduct} </span>
          <BiShoppingBag />
        </Link>
      </header>
      <div className="product-title-search">
        <span className="discover-bar">
          <h3>Discover your best</h3>
          <Link to="/favorites">
            <span>{favorites.totalFavorites}</span>
            <AiOutlineHeart />
          </Link>
        </span>
        <div className="product-search-box">
          <span className="search-box">
            <span className="search-box-icon">
              <RiSearch2Line />
            </span>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="search headphones"
            />
          </span>
          <span className="adjustment-icon">
            <HiOutlineAdjustments />
          </span>
        </div>
      </div>
      <div className=" popular-title-bar">
        <h4>popular headphones</h4>
        <Link to="/">see all</Link>
      </div>
      <Slider />
      <div className=" popular-title-bar">
        <h4>best sellings</h4>
        <Link to="/">see all</Link>
      </div>
      <Slider2 />
    </main>
  );
};
// ***** component ends ***** //

export default Products;
