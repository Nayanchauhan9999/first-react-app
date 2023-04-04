import React from "react";
import Navbar from "./Navbar";
import CartAndWishlist from "./Cart&Wishlist";
import { Routes,Route } from "react-router-dom";

const MafatNiMoj = () => {
  return (
    <>
      <div>
          <Navbar />
        <Routes>
        <Route path="wishlist" element={<CartAndWishlist heading="Your Wishlist"/>} />
        <Route path="cart" element={<CartAndWishlist heading="Your Cart"/>} />
        </Routes>
      </div>
    </>
  );
};

export default MafatNiMoj;
