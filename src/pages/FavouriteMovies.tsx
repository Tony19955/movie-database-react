import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectFavouriteMovies } from '../redux/slices/favouritesSlice';
import { StyledFavouriteMoviesWrapper, StyledNoFavouritesHeading } from './FavouriteMovies.styles';
import FavouriteMovieCard from '../components/FavouriteMovieCard';

const FavouriteMovies = (): JSX.Element => {
    const { t } = useTranslation();
    const favouriteMovies = useAppSelector(selectFavouriteMovies);

    return (
        <StyledFavouriteMoviesWrapper>
            {favouriteMovies.length > 0 ? (
                favouriteMovies.map((movieId) => <FavouriteMovieCard key={movieId} movieId={movieId} />)
            ) : (
                <StyledNoFavouritesHeading>{t('heading-no-favourites-added')}</StyledNoFavouritesHeading>
            )}
        </StyledFavouriteMoviesWrapper>
    );
};

export default FavouriteMovies;
