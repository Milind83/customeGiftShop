// NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // Import the corresponding CSS

const NotFound = () => (
  <div className="not-found">
    <h1 className="error-code">404</h1>
    <p className="error-message">
      Oops! The page you're looking for doesn't exist.
    </p>
    <Link to="/" className="home-link">
      Go Back Home
    </Link>
  </div>
);

export default NotFound;
