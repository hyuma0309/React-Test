import { createSlice } from "@reduxjs/toolkit";

export interface CounterSliceState {
  count: number;
}

const initialState: CounterSliceState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export const { actions } = counterSlice;

export default counterSlice.reducer;
