import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types/types';

interface SearchState {
    searchValue: string;
}

const initialState: SearchState = {
    searchValue: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        saveSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    }
});

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export const { saveSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
