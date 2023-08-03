import { StyledMovieListItems, StyledMovieListWrapper } from './MovieList.styles';

import { useTranslation } from 'react-i18next';
import { SyntheticEvent, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import MovieCard from '../components/MovieCard';
import Search from '../components/reusable/Search';
import InfoLabel from '../components/reusable/InfoLabel';
import LoaderSpinner from '../components/reusable/LoaderSpinner';

import { Movie } from '../types/types';

import { useDebounce } from '../hooks/useDebounce';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useGetMoviesQuery } from '../redux/services/omdbAPI';
import { saveMovies, saveSearchValue, selectMovies, selectScrollY, selectSearchValue } from '../redux/slices/searchSlice';

const ITEMS_PER_PAGE = 10;

const MovieList = (): JSX.Element => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const selectedMovies = useAppSelector(selectMovies);
    const savedSearchValue = useAppSelector(selectSearchValue);
    const previousScrollY = useAppSelector(selectScrollY);

    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>(savedSearchValue);
    const [movies, setMovies] = useState<Movie[] | []>(selectedMovies || []);

    const debouncedValue = useDebounce(searchValue, 500);

    const { data, isLoading, error } = useGetMoviesQuery({ s: debouncedValue as string, page: page }, { skip: !debouncedValue });
    const { Search: search, totalResults } = data || {};

    useEffect(() => {
        let scrollTimeout = setTimeout(() => {
            window.scrollTo(0, previousScrollY);
        }, 1000);
        return () => {
            clearTimeout(scrollTimeout);
        };
    }, [previousScrollY]);

    useEffect(() => {
        if (search) {
            setMovies([...movies, ...search]);
            saveMovies([...movies, ...search]);
        }
    }, [search]);

    const handleSearchValueChange = (e: SyntheticEvent<HTMLInputElement>): void => {
        const value = e.currentTarget.value;
        setSearchValue(value);
        setPage(1);
        setHasMore(true);
        setMovies([]);
        dispatch(saveSearchValue(value as string));
    };

    const handleIncreasePage = (): void => {
        setPage((page) => page + 1);
        const increased = page + 1;
        const multiplied = increased * ITEMS_PER_PAGE;
        const deducted = (totalResults || 0) - multiplied;
        const hasMore = deducted > 0;
        setHasMore(hasMore);
    };

    return (
        <StyledMovieListWrapper>
            <Search onChange={handleSearchValueChange} placeholder={t('label-search-movie')} value={searchValue} />
            {error ? <InfoLabel>{t('error-could-not-fetch')}</InfoLabel> : null}
            {isLoading ? <LoaderSpinner /> : null}
            {movies && movies.length > 0 ? (
                <InfiniteScroll
                    dataLength={page * 10}
                    next={handleIncreasePage}
                    hasMore={hasMore}
                    loader={<LoaderSpinner />}
                    endMessage={<InfoLabel>{t('heading-no-more-data')}</InfoLabel>}
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
