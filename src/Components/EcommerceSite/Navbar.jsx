import React from "react";
import { NavLink } from "react-router-dom";
import CartAndWishlist from "./Cart&Wishlist";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light d-flex justify-content-between align-items-center">
        <NavLink to="mafatnimoj" className={isActive => "homepage-mafatnimoj" + (!isActive? "homepage-deactivate":"")} >
          <h3 className="p-2 mb-0 text-warning" role="button">
            મફતનીમોજ.com
          </h3>
        </NavLink>
        <div className="input-group mb-3 w-50 mt-3">
          <input
            type="text"
            className="form-control remove-shadow"
            placeholder="Search"
          />
          <button className="btn btn-warning" type="button" id="button-addon2">
            Search
          </button>
        </div>
        <div>
          <NavLink
            to="wishlist"
            className={(isActive) =>
              "active-cart-wishlist" +
              (!isActive ? " not-active-cart-wishlist" : "")
            }
            element={<CartAndWishlist />}
          >
            <span
              className="m-2 p-2 bg-warning text-dark display-6 fs-5 rounded"
              role="button"
            >
              <strong>Wish List(0)</strong>
            </span>
          </NavLink>
          <NavLink
            to="cart"
            className={(isActive) =>
              "active-cart-wishlist" +
              (!isActive ? " not-active-cart-wishlist" : "")
            }
            element={<CartAndWishlist />}
          >
            <span
              className="m-2 p-2 display-6 fs-5 bg-warning text-dark rounded"
              role="button"
            >
              <strong> Cart(0)</strong>
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
