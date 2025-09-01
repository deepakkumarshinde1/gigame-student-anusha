import { createSlice } from "@reduxjs/toolkit";
import { getProductList } from "./service/product.service";

let ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    list: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(getProductList.fulfilled, (state, action) => {
        state.list = action.payload;
        state.error = null;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.error = "Something went wrong";
        state.list = [];
      });
  },
});

export default ProductSlice;
