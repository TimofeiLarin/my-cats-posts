import { combineReducers, configureStore } from '@reduxjs/toolkit';

import postsReducer from './slice/postsSlice';

const rootReducer = combineReducers({ postsReducer });

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();
