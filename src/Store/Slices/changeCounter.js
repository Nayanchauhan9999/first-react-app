import { createSlice } from "@reduxjs/toolkit";

const changeCounterSlice = createSlice({
    name: "changeCounter",
    initialState: 0,
    reducers:{
        increment(state = this.initialState,action){
        return  state = state + 1
        },
        decrement(state =this.initialState,action){
          return  state = state - 1
        },
        reset(state= this.initialState,action){
          return  state = 0
        }
    }
})

export const {increment,decrement,reset} = changeCounterSlice.actions
export default changeCounterSlice.reducer