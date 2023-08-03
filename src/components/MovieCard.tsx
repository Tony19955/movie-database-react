import { StyledMovieCardWrapper, StyledMovieImage, StyledMovieInfo, StyledMovieTitle, StyledMovieYear } from './MovieCard.styles';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from './reusable/Button';

import { NOT_AVAILABLE } from '../constants';
import { SyntheticEvent } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { saveScrollY } from '../redux/slices/searchSlice';

interface MovieCardProps {
    poster: string;
    title: string;
    year: string;
    imdbId: string;
}

const MovieCard = ({ imdbId, poster, title, year }: MovieCardProps): JSX.Element => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleViewButtonClick = (e: SyntheticEvent<HTMLButtonElement>): void => {
        navigate(`/movie/${e.currentTarget.value}`);
        dispatch(saveScrollY(window.scrollY));
    };

    return (
        <StyledMovieCardWrapper>
            <StyledMovieImage src={poster === NOT_AVAILABLE ? '/image-suspense.jpg' : `${poster}`} alt={title} />
            <StyledMovieInfo>
                <StyledMovieTitle>{title}</StyledMovieTitle>
                <StyledMovieYear>{year}</StyledMovieYear>
            </StyledMovieInfo>
            <Button onClick={handleViewButtonClick} value={imdbId} type="button">
                {t('label-view')}
            </Button>
        </StyledMovieCardWrapper>
    );
};

export default MovieCard;
