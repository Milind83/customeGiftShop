import React, { useState } from "react";
import "../styles/header.css"; // Import the corresponding CSS
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">GiftShop</Link> {/* Use Link for navigation */}
        </h1>
      </div>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/products">Products</Link> {/* Use Link for navigation */}
          </li>
          <li>
            <Link to="/categories">Categories</Link>{" "}
            {/* Use Link for navigation */}
          </li>
          <li>
            <Link to="/offers">Offers</Link> {/* Use Link for navigation */}
          </li>
          <li>
            <Link to="/about">About Us</Link> {/* Use Link for navigation */}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>{" "}
            {/* Use Link for navigation */}
          </li>
        </ul>
        <span className="devider"> | </span> {/* Adds the separator */}
        <div className="icons">
          <Link to="/wishlist" className="icon">
            <FaHeart title="Wishlist" />
          </Link>
          <Link to="/cart" className="icon">
            <FaShoppingCart title="Cart" />
          </Link>
          <Link to="/login" className="icon">
            <FaUser title="Login" />
          </Link>
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
