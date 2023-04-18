import React from "react";
import flipkartLogo from "./images/flipkart logo.png";
import { useDispatch, useSelector } from "react-redux";
import { searchInput } from "../Store/Slices/searchBarFlipkart";
import {openCart}  from "../Store/Slices/toggleCart"
import {openWishlist} from "../Store/Slices/toggleWishlist"

function Navbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const dispatch = useDispatch()
const handleChnage =(e)=>{
  dispatch(searchInput(e.target.value))
}
const cart = useSelector(state=>state.cart)
const wishlist = useSelector(state=>state.wishlist)
  return (
    <>
      <div className="flipkart-navbar">
        <div className="flipkart-logo">
          <img src={flipkartLogo} alt="flipkart-logo" width={100} />
        </div>
        <div className="searchbar-flipkart">
          <form onSubmit={handleSubmit}>
            <div className="search-bar-flipkart">
              <input type="text" className="input-field-flipkart" placeholder="Seach for products" onChange={handleChnage}/>
              <button className="search-button-flipkart"> Search</button>
            </div>
          </form>
        </div>
        <div className="signup-login-flipkart">
          <button type="button" onClick={() => dispatch(openCart(true))}>Cart {cart.length===0? null : <span>({cart.length}) </span>} </button>
          <button type="button" onClick={() => dispatch(openWishlist(true))}>Wishlist  {wishlist.length===0? null : <span>({wishlist.length}) </span>}</button>
          <button  type="button">
            SignUp
          </button>
          {/* <button type="button">
            Login
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
