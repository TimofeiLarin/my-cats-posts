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
  reducers: {
    addFavorites(state, action) {
      state.favoritesPosts.unshift(action.payload);
    },
    deleteFavorites(state, action) {
      state.favoritesPosts.splice(
        state.favoritesPosts.findIndex(({ id }) => id === action.payload),
        1
      );
    },
  },
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.allPosts.splice(
        state.allPosts.length - 1,
        0,
        ...action.payload.filteredPosts
      );
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
