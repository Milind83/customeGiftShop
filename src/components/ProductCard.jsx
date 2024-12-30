import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-section">
        <img
          src={product?.image}
          alt="Pull-Up Photo Album Box"
          className="product-image"
        />
        <button className="wishlist-btn">♡</button>
      </div>
      <div className="product-details">
        <h3 className="product-title">{product?.title}</h3>
        <div className="price-section">
          <span className="current-price">₹{product?.currentPrice}</span>
          <span className="original-price">₹{product?.originalPrice}</span>
          <span className="discount">{product?.discount}</span>
        </div>
        <div className="rating-section">
          <span className="rating">{product?.rating} ★</span>
          <span className="reviews">({product?.reviews})</span>
          <span className="tag">{product?.tag}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
