import { State } from './../type.d';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state, { payload }: PayloadAction<{ num: number }>) => {

      state.value = state.value + payload.num;
    },
    decrement: (state) => {
      state.value = state.value - 1
    }
  }
})



export const selectCounter = (state: State) => state.counter;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
