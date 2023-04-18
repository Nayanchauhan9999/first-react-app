import React from "react";
import Navbar from "./Navbar";
import "./flipkart.css";
import Categories from "./Categories";
import Carousel from "./Carousel";
import BottomBar from "./BottomBar";
import ProductCategory from "./ProductCategory";
import Footer from "./Footer";
import AdminPanel from "./AdminPanel";

function Flipkart() {
  return (
    <>
      <Navbar />
      <Categories />
      <Carousel />
      <ProductCategory />
      <BottomBar />
      <AdminPanel/>
      <Footer/>
    </>
  );
}

export default Flipkart;
