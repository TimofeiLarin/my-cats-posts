import { createSelector } from '@reduxjs/toolkit';

import { baseFavoritesPostsState } from './favoritesSelector';

const baseAllPostsState = (state) => state.postsReducer.allPosts;
const baseKeyAfterState = (state) => state.postsReducer.keyAfter;
const baseErrorState = (state) => state.postsReducer.error;
const baseIsLoadingState = (state) => state.postsReducer.isLoading;

export const getAllPosts = createSelector(
  baseAllPostsState,
  baseFavoritesPostsState,
  (allPosts, favoritesPosts) =>
    allPosts.map((post) => {
      const favoritePost = favoritesPosts.find(({ id }) => id === post.id);
      if (favoritePost) {
        return {
          ...post,
          favorite: true,
        };
      }
      return post;
    })
);
export const getKeyAfter = createSelector(
  baseKeyAfterState,
  (keyAfter) => keyAfter
);
export const getError = createSelector(baseErrorState, (error) => error);
export const getIsLoading = createSelector(
  baseIsLoadingState,
  (isLoading) => isLoading
);
