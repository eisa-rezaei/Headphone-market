import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineAdjustments } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Products.css";
import Slider from "../../components/Slider";
import Slider_2 from "../../components/Slider_2";

const Products = () => {
  return (
    <main className="products-page">
      <header className="header-of-products">
        <Link key="1" to="/">
          <IoGridOutline />
        </Link>
        <Link key="2" to="/card">
          <BiShoppingBag />
        </Link>
      </header>
      <div className="product-title-search">
        <h3>discover your best</h3>
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
      <Slider_2 />
    </main>
  );
};

export default Products;
