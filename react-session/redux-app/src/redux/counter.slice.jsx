import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
    reset(state, action) {
      state.count = 0;
    },
  },
});

export default CounterSlice;
export const { decrement, increment, reset } = CounterSlice.actions;
