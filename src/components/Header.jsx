import React, { useState } from "react";
import "../styles/header.css"; // Import the corresponding CSS
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"; // Importing icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <a href="/">GiftShop</a>
        </h1>
      </div>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/offers">Offers</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <span className="devider"> | </span> {/* Adds the separator */}
        <div className="icons">
          <a href="/wishlist" className="icon">
            <FaHeart title="Wishlist" />
          </a>
          <a href="/cart" className="icon">
            <FaShoppingCart title="Cart" />
          </a>
          <a href="/login" className="icon">
            <FaUser title="Login" />
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
