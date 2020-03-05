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



//todo organize def file

interface Counter {
  value: number
}

interface State {
  counter: Counter
}

//TODO  find a better way
export const selectCounter = (state: State) => state.counter;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
