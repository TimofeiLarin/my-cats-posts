import { createSlice } from '@reduxjs/toolkit';

import fetchPosts from '../actions/fetchPosts';

const initialState = {
  allPosts: [],
  favoritesPosts: [],
  keyAfter: '',
  isLoading: false,
  error: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.allPosts = [...state.allPosts, ...action.payload.filteredPosts];
      state.keyAfter = action.payload.after;
      state.error = '';
    },
    [fetchPosts.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
