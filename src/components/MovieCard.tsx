import { StyledMovieCardWrapper, StyledMovieImage, StyledMovieInfo, StyledMovieTitle, StyledMovieYear } from './MovieCard.styles';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from './reusable/Button';

import { NOT_AVAILABLE } from '../constants';

interface MovieCardProps {
    poster: string;
    title: string;
    year: string;
    imdbId: string;
}

const MovieCard = ({ imdbId, poster, title, year }: MovieCardProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <StyledMovieCardWrapper>
            <StyledMovieImage src={poster === NOT_AVAILABLE ? '/image-suspense.jpg' : `${poster}`} alt={title} />
            <StyledMovieInfo>
                <StyledMovieTitle>{title}</StyledMovieTitle>
                <StyledMovieYear>{year}</StyledMovieYear>
            </StyledMovieInfo>
            <Link to={'/movie/' + imdbId}>
                <Button>{t('label-view')}</Button>
            </Link>
        </StyledMovieCardWrapper>
    );
};

export default MovieCard;
