import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
}
const WishlistSlice = createSlice({
  name: "WishlistSlice",
  initialState: initialState,
  reducers: {
    addtoWishlist: (state, action) => {

      var myitem = state.wishlist.filter((key) => key.id == action.payload.id)

      if (myitem.length >= 1) {
        alert("this product is already exist !!")
      }
      else {
        state.wishlist.push(action.payload);
      }
    },
    delitem: (state, action) => {
      alert(action.payload)
      for (let i = 0; i < state.wishlist.length; i++) {
        if (action.payload == state.wishlist[i].id) {
          state.wishlist.splice(i, 1);
        }
      }
    }
  }
})

export const { addtoWishlist, delfromWishlist, delitem } = WishlistSlice.actions;
export default WishlistSlice.reducer;