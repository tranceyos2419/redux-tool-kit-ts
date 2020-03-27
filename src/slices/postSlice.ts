import { getPostApi } from './../api/a-post';
import { Post, State } from './../type.d';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';


export const getPost = createAsyncThunk('posts/fetch', getPostApi);


export const postSlice = createSlice({
  name: 'Post',
  initialState: [] as Post[],
  reducers: {
    init: (state, { payload }: PayloadAction<{ posts: Post[] }>) => {
      return payload.posts;
    }
  },
  extraReducers: {
    [getPost.fulfilled as any]: (state, action) => {
      state.push(action.payload)
    }
  }
})


export const selectPost = (state: State) => state.posts;
export const { init } = postSlice.actions;

export const postReducer = postSlice.reducer;
