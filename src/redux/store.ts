import { combineReducers, configureStore } from '@reduxjs/toolkit';

import checkoutReducer from './slices/checkoutSlice';

import { omdbAPI } from './services/omdbAPI';

const rootReducer = combineReducers({
    checkout: checkoutReducer,
    [omdbAPI.reducerPath]: omdbAPI.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(omdbAPI.middleware)
});
