import { StyledMovieListItems, StyledMovieListWrapper } from './MovieList.styles';

import { useTranslation } from 'react-i18next';
import { SyntheticEvent, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import MovieCard from '../components/MovieCard';
import Search from '../components/reusable/Search';
import InfoLabel from '../components/reusable/InfoLabel';
import LoaderSpinner from '../components/reusable/LoaderSpinner';

import { useDebounce } from '../hooks/useDebounce';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useGetMoviesQuery } from '../redux/services/omdbAPI';
import { saveSearchValue, selectSearchValue } from '../redux/slices/searchSlice';

const MovieList = (): JSX.Element => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const savedSearchValue = useAppSelector(selectSearchValue);
    const [searchValue, setSearchValue] = useState<string>(savedSearchValue);
    const debouncedValue = useDebounce(searchValue, 500);

    const { data: movies, isLoading, error } = useGetMoviesQuery({ s: debouncedValue as string });

    const handleSearchValueChange = (e: SyntheticEvent<HTMLInputElement>): void => {
        const value = e.currentTarget.value;
        setSearchValue(value);
        dispatch(saveSearchValue(value as string));
    };

    return (
        <StyledMovieListWrapper>
            <Search onChange={handleSearchValueChange} placeholder={t('label-search-movie')} value={searchValue} />
            {error ? <InfoLabel>{t('error-could-not-fetch')}</InfoLabel> : null}
            {isLoading ? <LoaderSpinner /> : null}
            {movies && movies.length > 0 ? (
                <InfiniteScroll
                    dataLength={movies.length}
                    next={() => console.log('there is more')}
                    hasMore={true} // Replace with a condition based on your data source
                    loader={<p>Loading...</p>}
                    endMessage={<p>No more data to load.</p>}
                >
                    <StyledMovieListItems>
                        {movies?.map(({ imdbID, Poster, Title, Year }) => (
                            <MovieCard key={imdbID} imdbId={imdbID} poster={Poster} title={Title} year={Year} />
                        ))}
                    </StyledMovieListItems>
                </InfiniteScroll>
            ) : (
                searchValue && !error && !isLoading && <InfoLabel>{t('label-no-movies-found')}</InfoLabel>
            )}
        </StyledMovieListWrapper>
    );
};

export default MovieList;
