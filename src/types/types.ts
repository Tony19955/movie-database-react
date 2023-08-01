import { store } from '../redux/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface Movie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

export interface MovieDetail {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Rated: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
    totalSeasons: string;
}
