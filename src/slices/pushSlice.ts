import { State } from './../type.d';
import { counterSlice } from './counterSlice';
import { createSlice } from '@reduxjs/toolkit';

export const pushSlice = createSlice({
  name: 'push',
  initialState: { value: 0 },
  reducers: {},
  extraReducers: {
    [counterSlice.actions.increment.type]: (state) => {
      state.value = state.value + 1
    },
    [counterSlice.actions.decrement.type]: (state) => {
      state.value = state.value + 1
    }
  }
})


export const selectPush = (state: State) => state.push;

export default pushSlice.reducer;
