import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesPosts: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addDeleteFavorites(state, action) {
      if (state.favoritesPosts.find(({ id }) => id === action.payload.id)) {
        state.favoritesPosts.splice(
          state.favoritesPosts.findIndex(({ id }) => id === action.payload.id),
          1
        );
      } else {
        state.favoritesPosts.push(action.payload);
      }
    },
  },
});

export default favoritesSlice.reducer;
