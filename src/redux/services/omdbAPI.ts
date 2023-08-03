import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GET } from '../../constants';
import { Movie, MovieDetail } from '../../types/types';

interface MoviesResponse {
    Response: string;
    Search: Movie[];
    totalResults: number;
}

interface GetMoviesParams {
    s: string;
    page: number;
}

interface GetMovieParams {
    i: string;
}

export const omdbAPI = createApi({
    reducerPath: 'omdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        getMovies: builder.query<MoviesResponse, GetMoviesParams>({
            query: ({ s, page }) => {
                return {
                    url: `/?apikey=${import.meta.env.VITE_OMDB_API_KEY}`,
                    method: GET,
                    params: { s, page }
                };
            },
            keepUnusedDataFor: 180
        }),

        getMovie: builder.query<MovieDetail, GetMovieParams>({
            query: ({ i }) => {
                return {
                    url: `/?apikey=${import.meta.env.VITE_OMDB_API_KEY}`,
                    method: GET,
                    params: { i }
                };
            },
            keepUnusedDataFor: 180
        })
    })
});

export const { useGetMoviesQuery, useGetMovieQuery } = omdbAPI;
