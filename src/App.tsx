import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styles';
import { PATH_FAVOURITE_MOVIES, PATH_HOME, PATH_MOVIE_DETAIL } from './constants';
import MovieDetail from './pages/MovieDetail';
import FavouriteMovies from './pages/FavouriteMovies';
import MovieList from './pages/MovieList';
import BasicLayout from './pages/layouts/BasicLayout';

function App() {
    return (
        <AppWrapper>
            <Routes>
                <Route path={PATH_HOME} element={<BasicLayout />}>
                    <Route index path={PATH_HOME} element={<MovieList />} />
                    <Route path={PATH_MOVIE_DETAIL} element={<MovieDetail />} />
                    <Route path={PATH_FAVOURITE_MOVIES} element={<FavouriteMovies />} />
                </Route>
            </Routes>
        </AppWrapper>
    );
}

export default App;
