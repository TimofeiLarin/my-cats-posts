import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import postsReducer from './slice/postsSlice';
import favoritesReducer from './slice/favoritesSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['postsReducer'],
};

const rootReducer = combineReducers({ postsReducer, favoritesReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export const store = setupStore();
export const persistor = persistStore(store);
