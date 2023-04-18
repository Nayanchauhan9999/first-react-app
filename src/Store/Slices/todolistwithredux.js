import { createSlice } from "@reduxjs/toolkit";

const todolistwithredux = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const { input, id } = action.payload;
      return (state = [...state, { input, id }].filter((value) => {
        return value.input.length >= 1;
      }));
    },
    deleteItem(state, action) {
      const { id, array } = action.payload;
      return (state = array.filter((value) => {
        return value.id !== id;
      }));
    },
    removeAllItem(state, action) {
      return (state = []);
    },
  },
});

export const { addItem, deleteItem, removeAllItem } = todolistwithredux.actions;
export default todolistwithredux.reducer;
