import { createSlice } from "@reduxjs/toolkit";

const toggleWishlist = createSlice({
    name:"togglecart",
    initialState:false,
    reducers:{
        openWishlist(state,action){
            return action.payload
        },
        closeWishlist(state,action){
            return action.payload
        }
    }
})

export const {openWishlist,closeWishlist} = toggleWishlist.actions
export default toggleWishlist.reducer