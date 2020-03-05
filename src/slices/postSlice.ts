import { Post, State } from './../type.d';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const postSlice = createSlice({
  name: 'Post',
  initialState: [] as Post[],
  reducers: {
    add: (state, { payload }: PayloadAction<{ post: Post }>) => {
      state.push(payload.post);
    },
    init: (state, { payload }: PayloadAction<{ posts: Post[] }>) => {
      return payload.posts;
    }
  }

})

export const selectPost = (state: State) => state.posts;
export const { add, init } = postSlice.actions;

export const postReducer = postSlice.reducer;
