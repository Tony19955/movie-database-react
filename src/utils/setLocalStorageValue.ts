import { REDUX_LOCAL_STORAGE_KEY } from '../constants';

export const setLocalStorageValue = async (state: any): Promise<void> => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(REDUX_LOCAL_STORAGE_KEY, serializedState);
    } catch (e) {
        console.error('Could not save data to localStorage');
    }
};
