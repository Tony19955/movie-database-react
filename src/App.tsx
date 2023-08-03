import { AppWrapper } from './App.styles';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { store } from './redux/store';
import { setLocalStorageValue } from './utils/setLocalStorageValue';

import { PATH_FAVOURITE_MOVIES, PATH_HOME, PATH_MOVIE_DETAIL } from './constants';

import BasicLayout from './pages/layouts/BasicLayout';
import LoaderSpinner from './components/reusable/LoaderSpinner';

const MovieList = lazy(() => import('./pages/MovieList'));
const MovieDetail = lazy(() => import('./pages/MovieDetail'));
const FavouriteMovies = lazy(() => import('./pages/FavouriteMovies'));

function App() {
    store.subscribe(() => setLocalStorageValue({ favourites: store.getState().favourites }));

    return (
        <AppWrapper>
            <Suspense fallback={<LoaderSpinner />}>
                <Routes>
                    <Route path={PATH_HOME} element={<BasicLayout />}>
                        <Route index path={PATH_HOME} element={<MovieList />} />
                        <Route path={PATH_MOVIE_DETAIL} element={<MovieDetail />} />
                        <Route path={PATH_FAVOURITE_MOVIES} element={<FavouriteMovies />} />
                    </Route>
                </Routes>
            </Suspense>
        </AppWrapper>
    );
}

export default App;
