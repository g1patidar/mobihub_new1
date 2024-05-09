import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  orderdetail:{}
}

const AllOrderDetailSlice= createSlice({
  name:'Orderdetail',
  initialState,

  reducers:{
    setOrderDetail:(state,action)=>{
      state.orderdetail=action.payload
    }
  }
})

export default AllOrderDetailSlice.reducer;
export const { setOrderDetail } = AllOrderDetailSlice.actions;