import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GET } from '../../constants';

interface MovieResponse {
    isValid: boolean;
    errors: {
        code: string;
        description: string;
    }[];
}

interface GetMovieParams {
    searchValue: string;
}

export const omdbAPI = createApi({
    reducerPath: 'omdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}` }),
    endpoints: (builder) => ({
        getMovie: builder.query<MovieResponse, GetMovieParams>({
            query: ({ searchValue }) => {
                return {
                    url: '/',
                    method: GET,
                    params: { searchValue }
                };
            },
            extraOptions: { maxRetries: 0 }
        })
    })
});

export const { useGetMovieQuery } = omdbAPI;
