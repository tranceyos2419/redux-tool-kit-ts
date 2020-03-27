import { State } from './../type.d';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
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
    },
    multiply: {
      reducer: (state, { payload }: PayloadAction<{ num: number }>) => {
        state.value = payload.num;
      },
      prepare: ({ num }: { num: number }) => ({
        payload: {
          num: num * 2
        }
      })

    }
  },

})




export const selectCounter = (state: State) => state.counter;

export const { increment, decrement, multiply } = counterSlice.actions;

export default counterSlice.reducer;
