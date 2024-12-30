import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} Gift Shop. All rights reserved.</p>
      <p>Contact: info@giftshop.com</p>
    </footer>
  );
};

export default Footer;
