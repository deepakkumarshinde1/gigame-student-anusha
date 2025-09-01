import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductList = createAsyncThunk(
  "ProductSlice/getProductList",
  async () => {
    let response = await fetch(`https://fakestoreapi.com/products`);
    let data = await response.json();
    return data;
  }
);
