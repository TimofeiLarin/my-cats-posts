import { combineReducers, configureStore } from '@reduxjs/toolkit';

import postsReducer from './slice/postsSlice';
import favoritesReducer from './slice/favoritesSlice';

const rootReducer = combineReducers({ postsReducer, favoritesReducer });

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();
