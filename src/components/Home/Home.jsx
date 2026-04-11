import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Value from "../Values/Value";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import Discount from "../Discount/Discount";
import Costumer from "../Costumer/Costumer";
const Home = () => {
  return (
    <div>
      <Hero />
      <Category/>
      <Value/>
      <Products/>
      <Discount/>
      <Costumer/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
