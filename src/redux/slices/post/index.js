import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import config from '../../../config';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await axios.get(
    config.apiUrl + 'posts',
    {
      headers: {
        'Access-Control-Allow-Private-Network': true,
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
  return response.data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.posts = [...action.payload];
    },
  },
});

export const { } = postSlice.actions;

export default postSlice.reducer;
