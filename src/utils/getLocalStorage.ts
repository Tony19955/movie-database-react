import { REDUX_LOCAL_STORAGE_KEY } from '../constants';

export const getLocalStorage = () => {
    const serializedState = localStorage.getItem(REDUX_LOCAL_STORAGE_KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
};
