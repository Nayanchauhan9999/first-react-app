import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart(state, action) {
      return [...state,action.payload].filter((value, index, self) =>
      index === self.findIndex((elem) => (
        elem.id === value.id && elem.price === value.price && elem.title === value.title  
      ))
    )
    },
    removeCart(state, action) {
      return state.filter((value) => value.id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
