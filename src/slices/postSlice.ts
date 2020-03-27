import { Post, State } from './../type.d';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

const getPost = async (postNumber: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postNumber}`
  );
  const data = await res.json();
  return data
};


export const fetchPost = createAsyncThunk('posts/fetch', getPost)


export const postSlice = createSlice({
  name: 'Post',
  initialState: [] as Post[],
  reducers: {

    init: (state, { payload }: PayloadAction<{ posts: Post[] }>) => {
      return payload.posts;
    }
  },
  extraReducers: {
    [fetchPost.fulfilled as any]: (state, action) => {
      state.push(action.payload)
    }
  }
})


export const selectPost = (state: State) => state.posts;
export const { init } = postSlice.actions;

export const postReducer = postSlice.reducer;
