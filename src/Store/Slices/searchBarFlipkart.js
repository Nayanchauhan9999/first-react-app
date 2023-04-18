import { createSlice } from "@reduxjs/toolkit";

const searchBar = createSlice({
    name:"searchBar",
    initialState: "",
    reducers:{
        searchInput(state,action){
            return action.payload
        }
    }
})

export const {searchInput} = searchBar.actions
export default searchBar.reducer