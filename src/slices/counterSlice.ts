import { State } from './../type.d';
import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1
    }
  }
})



export const selectCounter = (state: State) => state.counter;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
