import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./slice/ProductSlice"
import wishlistreducer from "./slice/WishlistSlice"
import allProductsreducer from "./slice/AllProductSlice"
const store = configureStore({
  reducer:{
    cartslice:cartreducer,
    WishlistSlice:wishlistreducer,
    allProducts:allProductsreducer

  }
});

export default store;