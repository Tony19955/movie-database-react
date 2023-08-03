import { useEffect, useRef, useState } from 'react';
import { RootState } from '../types/types';

export const useDebounce = (value: string | number | RootState, delay = 500): string | number | RootState => {
    const [debouncedValue, setDebouncedValue] = useState<string | number | RootState>('');
    const timerRef = useRef<number>(0);

    useEffect(() => {
        timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [value, delay]);

    return debouncedValue;
};
