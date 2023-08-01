import { useTranslation } from 'react-i18next';
import {
    StyledImageSuspense,
    StyledMovieCardWrapper,
    StyledMovieImage,
    StyledMovieInfo,
    StyledMovieTitle,
    StyledMovieYear
} from './MovieCard.styles';
import Button from './reusable/Button';
import { Link } from 'react-router-dom';
import Icon from './reusable/Icon';

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
            {poster === 'N/A' ? (
                <StyledImageSuspense>
                    <Icon id="movie-icon" className="movie-icon" />
                </StyledImageSuspense>
            ) : (
                <StyledMovieImage src={`${poster}`} alt={title} />
            )}
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
