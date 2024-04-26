import { createSlice } from "@reduxjs/toolkit";

export const NumberSlice = createSlice({
  name: "Number ",
  initialState: {
    number: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.number = state.number + 1
    },
    decrement: (state, action) => {
        state.number = state.number - 1
    },
  },
});

export const {increment , decrement} = NumberSlice.actions
export default NumberSlice.reducer
