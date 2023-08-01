import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types/types';

interface FavouritesState {
    favouriteMovies: string[];
}

const initialState: FavouritesState = {
    favouriteMovies: []
};

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        saveFavouriteMovie: (state, action: PayloadAction<string[]>) => {
            state.favouriteMovies = action.payload;
        },
        removeFavouriteMovie: (state, action: PayloadAction<string>) => {
            state.favouriteMovies = state.favouriteMovies.filter((movie) => movie !== action.payload);
        }
    }
});

export const selectFavouriteMovies = (state: RootState) => state.favourites.favouriteMovies;

export const { saveFavouriteMovie, removeFavouriteMovie } = favouritesSlice.actions;

export default favouritesSlice.reducer;
