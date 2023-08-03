import {
    StyledButtonsWrapper,
    StyledFavouriteMovieWrapper,
    StyledMovieImage,
    StyledMovieTitle,
    StyledMovieTitleWrapper,
    StyledRemoveButton
} from './FavouriteMovieCard.styles';

import { Link } from 'react-router-dom';
import { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { removeFavouriteMovie } from '../redux/slices/favouritesSlice';

import { useGetMovieQuery } from '../redux/services/omdbAPI';

import { NOT_AVAILABLE } from '../constants';

import Icon from './reusable/Icon';
import Button from './reusable/Button';
import InfoLabel from './reusable/InfoLabel';
import LoaderSpinner from './reusable/LoaderSpinner';

interface FavouriteMovieCardProps {
    movieId: string;
}

const FavouriteMovieCard = ({ movieId }: FavouriteMovieCardProps): JSX.Element => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { data: movie, isLoading, error } = useGetMovieQuery({ i: movieId });
    const { Title, Poster, imdbID } = movie || {};

    const handleRemoveMovie = (e: SyntheticEvent<HTMLButtonElement>): void => {
        dispatch(removeFavouriteMovie(e.currentTarget.value));
    };

    return (
        <StyledFavouriteMovieWrapper>
            {error ? <InfoLabel>{t('error-could-not-fetch')}</InfoLabel> : null}
            {!isLoading && !error && !movie ? <InfoLabel>{t('error-no-available')}</InfoLabel> : null}
            {isLoading ? (
                <LoaderSpinner />
            ) : (
                <>
                    <StyledMovieImage src={Poster === NOT_AVAILABLE ? '/image-suspense.jpg' : `${Poster}`} alt={Title} />
                    <StyledMovieTitleWrapper>
                        <StyledMovieTitle>{Title}</StyledMovieTitle>
                    </StyledMovieTitleWrapper>
                    <StyledButtonsWrapper>
                        <Link to={'/movie/' + imdbID}>
                            <Button rounded>{t('label-movie-detail')}</Button>
                        </Link>
                        <StyledRemoveButton onClick={handleRemoveMovie} value={movieId}>
                            <Icon id="trash-bin-icon" className="trash-bin-icon" />
                        </StyledRemoveButton>
                    </StyledButtonsWrapper>
                </>
            )}
        </StyledFavouriteMovieWrapper>
    );
};

export default FavouriteMovieCard;
