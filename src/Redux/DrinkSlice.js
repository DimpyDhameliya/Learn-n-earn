import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllDrinks = createAsyncThunk("Drinks/getDrinks", async () => {
  const response = await axios.get(
    "https://www.thecocktailproject.com/search/?search_api_fulltext=margarita"
  );
  return response.data.drinks;
});

export const DrinkSlice = createSlice({
  name: "Drinks",
  initialState: {
    drinks: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDrinks.fulfilled, (state, action) => {
      state.drinks = action.payload;
    });
  },
});

export const {} = DrinkSlice.actions;
export default DrinkSlice.reducer;
