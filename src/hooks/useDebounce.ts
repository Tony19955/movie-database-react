import { useEffect, useRef, useState } from 'react';

export const useDebounce = (value: string | number, delay = 500): string | number => {
    const [debouncedValue, setDebouncedValue] = useState<string | number>('');
    const timerRef = useRef<number>(0);

    useEffect(() => {
        timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [value, delay]);

    return debouncedValue;
};
