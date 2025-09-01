import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.slice";
import ProductSlice from "./product.slice";

let store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    product: ProductSlice.reducer,
  },
});

export default store;
