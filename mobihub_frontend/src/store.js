import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./slice/ProductSlice"
import wishlistreducer from "./slice/WishlistSlice"
const store = configureStore({
  reducer:{
    cartslice:cartreducer,
    WishlistSlice:wishlistreducer
  }
});

export default store;