import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addWishlist(state, action) {
      return [...state, action.payload].filter(
        (value, index, self) =>
          index ===
          self.findIndex(
            (elem) => elem.id === value.id && elem.price === value.price && elem.title === value.title
          )
      );
    },
    removeWishlist(state, action) {
      return state.filter((value) => value.id !== action.payload);
    },
  },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
