import { createSelector } from '@reduxjs/toolkit';

const baseAllPostsState = (state) => state.postsReducer.allPosts;
const baseKeyAfterState = (state) => state.postsReducer.keyAfter;
const baseErrorState = (state) => state.postsReducer.error;
const baseIsLoadingState = (state) => state.postsReducer.isLoading;

export const getAllPosts = createSelector(
  baseAllPostsState,
  (allPosts) => allPosts
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
