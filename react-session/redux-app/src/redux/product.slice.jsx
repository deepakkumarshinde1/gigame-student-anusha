import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    list: [],
    error: null,
  },
  reducers: {
    getProductList() {},
    saveProductList(state, action) {
      state.list = action.payload;
    },
  },
});

export default ProductSlice;
export const { getProductList, saveProductList } = ProductSlice.actions;
