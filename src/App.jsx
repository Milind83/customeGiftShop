import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Offers from "./components/Offers";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Breadcrumb from "./components/Breadcrumb"; // Import the Breadcrumb component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Breadcrumb /> {/* Add the Breadcrumb here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
