import React from "react";
import "../styles/Products.css";
import ProductCard from "./ProductCard";

const Products = () => {
  const productList = [
    {
      id: 8301,
      title: "Pull-Up Photo Album Box And Treats",
      image: "https://via.placeholder.com/300x200",
      currentPrice: 595,
      originalPrice: 675,
      discount: "12% OFF",
      rating: 4.4,
      reviews: 426,
      tag: "Personalizable",
    },
    {
      id: 8302,
      title: "Customized Mug with Photo",
      image: "https://via.placeholder.com/300x200",
      currentPrice: 299,
      originalPrice: 399,
      discount: "25% OFF",
      rating: 4.7,
      reviews: 512,
      tag: "Personalizable",
    },
    {
      id: 8303,
      title: "Gift Hamper with Chocolates and Teddy",
      image: "https://via.placeholder.com/300x200",
      currentPrice: 999,
      originalPrice: 1200,
      discount: "17% OFF",
      rating: 4.5,
      reviews: 328,
      tag: "Exclusive",
    },
    {
      id: 8304,
      title: "Personalized Keychain",
      image: "https://via.placeholder.com/300x200",
      currentPrice: 150,
      originalPrice: 200,
      discount: "25% OFF",
      rating: 4.3,
      reviews: 180,
      tag: "Personalizable",
    },
    {
      id: 8305,
      title: "Photo Collage Frame",
      image: "https://via.placeholder.com/300x200",
      currentPrice: 899,
      originalPrice: 1100,
      discount: "18% OFF",
      rating: 4.6,
      reviews: 290,
      tag: "Best Seller",
    },
  ];
  return (
    <div className="products">
      <h1>Our Products</h1>
      <ul className="products-list">
        {productList.map((product) => (
          <ProductCard product={product} />
          //   <li key={product.id}>
          //     <h2>{product.name}</h2>
          //     <p>Price: {product.price}</p>
          //   </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
