import { createSlice } from "@reduxjs/toolkit";

const toggleCart = createSlice({
    name:"togglecart",
    initialState:false,
    reducers:{
        openCart(state,action){
            return action.payload
        },
        closeCart(state,action){
            return action.payload
        }
    }
})

export const {openCart,closeCart} = toggleCart.actions
export default toggleCart.reducer