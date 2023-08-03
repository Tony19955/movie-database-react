import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import searchReducer from './slices/searchSlice';
import favouritesReducer from './slices/favouritesSlice';

import { omdbAPI } from './services/omdbAPI';
import { getLocalStorage } from '../utils/getLocalStorage';

const rootReducer = combineReducers({
    favourites: favouritesReducer,
    search: searchReducer,
    [omdbAPI.reducerPath]: omdbAPI.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(omdbAPI.middleware),
    preloadedState: getLocalStorage()
});

setupListeners(store.dispatch);
