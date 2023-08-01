import {
    StyledAboutHeading,
    StyledAboutInfoRow,
    StyledAboutWrapper,
    StyledActionButtons,
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

import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useGetMovieQuery } from '../redux/services/omdbAPI';

import Icon from '../components/reusable/Icon';
import Button from '../components/reusable/Button';

const MovieDetail = (): JSX.Element => {
    const { id } = useParams();
    const { t } = useTranslation();

    const { data: movieDetail, isLoading, error } = useGetMovieQuery({ i: id as string });

    const { Actors, Director, Genre, imdbRating, Plot, Poster, Rated, Released, Title, Writer, Year } = movieDetail || {};

    return (
        <StyledMovieDetailWrapper>
            <StyledMovieDetailHeader>
                <StyledMovieTitleWrapper>
                    <Icon id="star-icon" className="star-icon" />
                    <StyledMovieTitle>{Title}</StyledMovieTitle>
                    <StyledMovieYear>{`(${Year})`}</StyledMovieYear>
                </StyledMovieTitleWrapper>
                <StyledMovieGeneralInfo>
                    <StyledMovieImage src={`${Poster}`} alt={Title} />
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
                </StyledAboutInfoRow>
                <StyledActionButtons>
                    <Button rounded>View on IMDB</Button>
                    <Button rounded>Back to search</Button>
                </StyledActionButtons>
            </StyledAboutWrapper>
        </StyledMovieDetailWrapper>
    );
};

export default MovieDetail;
