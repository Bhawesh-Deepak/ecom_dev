import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    resetValue: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, resetValue } = counterSlice.actions;
export default counterSlice.reducer;
