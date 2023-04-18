import { configureStore } from "@reduxjs/toolkit";
import changeCounterSlice from "./Slices/changeCounter";
import todolistwithredux from "./Slices/todolistwithredux";
import searchBar from "./Slices/searchBarFlipkart"
import cartSlice from "./Slices/cartSlice";
import wishlistSlice from "./Slices/wishlistSlice";
import toggleCart from "./Slices/toggleCart";
import toggleWishlist from "./Slices/toggleWishlist";

const store = configureStore({
  reducer: {
    changeCounter: changeCounterSlice,
    todoListWithRTK: todolistwithredux,
    searchBar,
    cart: cartSlice,
    wishlist : wishlistSlice,
    openCart : toggleCart,
    openWishlist : toggleWishlist
  }
});

export default store;
