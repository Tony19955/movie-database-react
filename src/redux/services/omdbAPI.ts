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
}

interface GetMovieParams {
    i: string;
}

export const omdbAPI = createApi({
    reducerPath: 'omdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com' }),
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], GetMoviesParams>({
            query: ({ s }) => {
                return {
                    url: `/?apikey=${import.meta.env.VITE_OMDB_API_KEY}`,
                    method: GET,
                    params: { s }
                };
            },
            transformResponse: (moviesResponseData: MoviesResponse) => {
                return moviesResponseData.Search;
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
