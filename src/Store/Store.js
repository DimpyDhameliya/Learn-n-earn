import { combineReducers, configureStore } from "@reduxjs/toolkit";
import NumberSlice from "../Redux/NumberSlice";
import DrinkSlice from "../Redux/DrinkSlice";

const rootReucer = combineReducers ({
    number : NumberSlice,
    drink : DrinkSlice,
    
})

export const store = configureStore({
  reducer: rootReucer,
});
