import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ProductLandscape from "./ProductLandscape";
import { useDispatch, useSelector } from "react-redux";
import { openCart, closeCart } from "../Store/Slices/toggleCart";
import { openWishlist, closeWishlist } from "../Store/Slices/toggleWishlist";

const BottomBar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const openC = useSelector((state) => state.openCart);
  const openW = useSelector((state) => state.openWishlist);
  return (
    <>
      {openC ? (
        <div className="container-fluid border cart-wishlist-main-div">
          <div className="position-relative mb-5">
            <p className="display-6 p-2 fs-4 mt-2 text-center d-block bg-dark text-light">
              Your Cart
            </p>
            <AiOutlineCloseCircle
              className="close-icon-flipkart"
              onClick={() => dispatch(closeCart(false))}
            />
            {cart.length === 0 ? (
              <h2 className="text-center mt-4 display-5 text-info">
                Your Cart is Empty...
              </h2>
            ) : (
              cart.map((value, index) => {
                return (
                  <ProductLandscape
                    key={index}
                    title={value.title}
                    image={value.thumbnail}
                    description={value.description}
                    price={value.price}
                    id={value.id}
                    removetitle="Remove From Cart"
                    visibility="visible"
                  />
                );
              })
            )}
          </div>
          <div className="checkout-div-flipkart bg-light border">
            <p className="display-6 fs-4 ">
              Cart Value :<span className="text-danger"> &nbsp; $50,000</span>
            </p>
            <button className="btn btn-sm btn-success m-2">Place Order</button>
          </div>
        </div>
      ) : null}
      {openW ? (
        <div className="container-fluid border cart-wishlist-main-div">
          <div className="position-relative">
            <p className="display-6 p-2 fs-4 mt-2 text-center d-block bg-dark text-light">
              Your Wishlist
            </p>
            <AiOutlineCloseCircle
              className="close-icon-flipkart"
              onClick={() => dispatch(closeWishlist(false))}
            />
            {wishlist.length === 0 ? (
              <h2 className="text-center mt-4 display-5 text-info">
                Your wishlist is Empty...
              </h2>
            ) : (
              wishlist.map((value, index) => {
                return (
                  <ProductLandscape
                    key={index}
                    title={value.title}
                    image={value.thumbnail}
                    description={value.description}
                    price={value.price}
                    id={value.id}
                    removetitle="Remove From Wishlist"
                    visibility="hidden"
                  />
                );
              })
            )}
          </div>
        </div>
      ) : null}

      <div className="container-fluid bottombar-main-div-flipkart text-center bg-light border-top">
        <div className="home-flipkart-bottombar">
          <AiOutlineHome />
          <p className="bottombar-menu-name-flipkart">Home</p>
        </div>
        <div className="Notification-flipkart-bottombar">
          <IoNotificationsCircleOutline />
          <p className="bottombar-menu-name-flipkart">Notification</p>
        </div>
        <div className="profile-flipkart-bottombar">
          <CgProfile />
          <p className="bottombar-menu-name-flipkart">Profile</p>
        </div>
        <div
          className="wishlist-flipkart-bottombar"
          onClick={() => dispatch(openWishlist(true))}
        >
          <AiOutlineHeart />
          <p className="bottombar-menu-name-flipkart">
            Wishlist
            {wishlist.length === 0 ? null : <span> ({wishlist.length})</span>}
          </p>
        </div>
        <div
          className="cart-flipkart-bottombar"
          onClick={() => dispatch(openCart(true))}
        >
          <AiOutlineShoppingCart />
          <p className="bottombar-menu-name-flipkart">
            Cart {cart.length === 0 ? null : <span> ({cart.length})</span>}
          </p>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
