import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, RootState } from '../../types/types';

interface SearchState {
    movies: Movie[];
    searchValue: string;
    scrollY: number;
}

const initialState: SearchState = {
    movies: [],
    searchValue: '',
    scrollY: 0
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        saveSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        saveScrollY: (state, action: PayloadAction<number>) => {
            state.scrollY = action.payload;
        },
        saveMovies: (state, action: PayloadAction<Movie[]>) => {
            state.movies = action.payload;
        }
    }
});

export const selectMovies = (state: RootState) => state.search.movies;
export const selectScrollY = (state: RootState) => state.search.scrollY;
export const selectSearchValue = (state: RootState) => state.search.searchValue;

export const { saveMovies, saveScrollY, saveSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
