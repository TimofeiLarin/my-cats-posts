import { createSelector } from '@reduxjs/toolkit';

const baseFavoritesPostsState = (state) =>
  state.favoritesReducer.favoritesPosts;

export const getFavoritesPosts = createSelector(
  baseFavoritesPostsState,
  (favoritesPosts) => favoritesPosts
);
