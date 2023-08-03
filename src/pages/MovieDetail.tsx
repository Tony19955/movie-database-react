import {
    StyledAboutHeading,
    StyledAboutInfoRow,
    StyledAboutWrapper,
    StyledActionButtons,
    StyledFavouritesButton,
    StyledGeneralInfoContent,
    StyledInfoRow,
    StyledMovieDetailHeader,
    StyledMovieDetailWrapper,
    StyledMovieGeneralInfo,
    StyledMovieImage,
    StyledMovieTitle,
    StyledMovieTitleWrapper,
    StyledMovieYear,
    StyledPlot
} from './MovieDetail.styles';

import { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import { useGetMovieQuery } from '../redux/services/omdbAPI';
import { removeFavouriteMovie, saveFavouriteMovie, selectFavouriteMovies } from '../redux/slices/favouritesSlice';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';

import { NOT_AVAILABLE } from '../constants';

import Icon from '../components/reusable/Icon';
import Button from '../components/reusable/Button';
import InfoLabel from '../components/reusable/InfoLabel';
import LoaderSpinner from '../components/reusable/LoaderSpinner';

const MovieDetail = (): JSX.Element => {
    const { id } = useParams();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const favouriteMovies = useAppSelector(selectFavouriteMovies);

    const isFavourite = id && favouriteMovies.includes(id);

    const { data: movieDetail, isLoading, error } = useGetMovieQuery({ i: id as string });
    const {
        Actors,
        Awards,
        Country,
        Director,
        Genre,
        imdbRating,
        imdbID,
        Language,
        Metascore,
        Plot,
        Poster,
        Rated,
        Released,
        Runtime,
        Title,
        totalSeasons,
        Type,
        Writer,
        Year
    } = movieDetail || {};

    const handleFavouritesButtonClick = (e: SyntheticEvent<HTMLButtonElement>): void => {
        const value = e.currentTarget.value;

        if (isFavourite) {
            dispatch(removeFavouriteMovie(value));
            return;
        }

        dispatch(saveFavouriteMovie(value));
    };

    return (
        <StyledMovieDetailWrapper>
            {error ? <InfoLabel>{t('error-could-not-fetch')}</InfoLabel> : null}
            {isLoading ? (
                <LoaderSpinner />
            ) : (
                <>
                    <StyledMovieDetailHeader>
                        <StyledMovieTitleWrapper>
                            <StyledFavouritesButton rounded favourite={Boolean(isFavourite)} onClick={handleFavouritesButtonClick} value={id}>
                                <Icon id="star-icon" className="star-icon" />
                            </StyledFavouritesButton>
                            <StyledMovieTitle>{Title}</StyledMovieTitle>
                            <StyledMovieYear>{`(${Year})`}</StyledMovieYear>
                        </StyledMovieTitleWrapper>

                        <StyledMovieGeneralInfo>
                            <StyledMovieImage src={Poster === NOT_AVAILABLE ? '/image-suspense.jpg' : `${Poster}`} alt={Title} />
                            <StyledGeneralInfoContent>
                                <StyledInfoRow>
                                    <p>{t('label-genre')}</p>
                                    <p>{Genre}</p>
                                </StyledInfoRow>
                                <StyledInfoRow>
                                    <p>{t('label-released')}</p>
                                    <p>{Released}</p>
                                </StyledInfoRow>
                                <StyledInfoRow>
                                    <p>{t('label-rated')}</p>
                                    <p>{Rated}</p>
                                </StyledInfoRow>
                                <StyledInfoRow>
                                    <p>{t('label-imdb')}</p>
                                    <p>{imdbRating}</p>
                                </StyledInfoRow>
                            </StyledGeneralInfoContent>
                        </StyledMovieGeneralInfo>
                    </StyledMovieDetailHeader>

                    <StyledAboutWrapper>
                        <StyledAboutHeading>{t('heading-about')}</StyledAboutHeading>
                        <StyledPlot>{Plot}</StyledPlot>
                        <StyledAboutInfoRow>
                            <p>
                                <strong>{t('label-director')}</strong>
                                {Director}
                            </p>
                            <p>
                                <strong>{t('label-writer')}</strong>
                                {Writer}
                            </p>
                            <p>
                                <strong>{t('label-actors')}</strong>
                                {Actors}
                            </p>
                            <p>
                                <strong>{t('label-awards')}</strong>
                                {Awards}
                            </p>
                            <p>
                                <strong>{t('label-country')}</strong>
                                {Country}
                            </p>
                            <p>
                                <strong>{t('label-language')}</strong>
                                {Language}
                            </p>
                            <p>
                                <strong>{t('label-metascore')}</strong>
                                {Metascore}
                            </p>
                            <p>
                                <strong>{t('label-runtime')}</strong>
                                {Runtime}
                            </p>
                            <p>
                                <strong>{t('label-type')}</strong>
                                {Type}
                            </p>
                            {totalSeasons ? (
                                <p>
                                    <strong>{t('label-total-seasons')}</strong>
                                    {totalSeasons}
                                </p>
                            ) : null}
                        </StyledAboutInfoRow>
                        <StyledActionButtons>
                            <a href={'https://www.imdb.com/title/' + imdbID}>
                                <Button rounded>{t('label-view-imdb')}</Button>
                            </a>
                            <Link to="/">
                                <Button rounded>{t('label-back-to-search')}</Button>
                            </Link>
                        </StyledActionButtons>
                    </StyledAboutWrapper>
                </>
            )}
        </StyledMovieDetailWrapper>
    );
};

export default MovieDetail;
