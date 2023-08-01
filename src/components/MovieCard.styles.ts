import styled from 'styled-components';
import { BLACK, GREY, WHITE } from '../styles/colors';

export const StyledMovieCardWrapper = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;

    > a {
        width: 100%;

        button {
            width: 100%;
        }
    }
`;

export const StyledImageSuspense = styled.div`
    height: 100%;
    display: flex;
    min-height: 45rem;
    background: ${GREY};
    align-items: center;
    justify-content: center;

    .movie-icon {
        width: auto;
        height: 10rem;
    }
`;

export const StyledMovieImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
`;

export const StyledMovieInfo = styled.div`
    gap: 0.5rem;
    display: flex;
    padding: 1.5rem;
    background: ${BLACK};
    flex-direction: column;
    border-top: 0.2rem solid ${WHITE};
`;

export const StyledMovieTitle = styled.p`
    color: ${WHITE};
    font-weight: 700;
    font-size: 1.4rem;
`;

export const StyledMovieYear = styled.p`
    color: ${WHITE};
    font-size: 1.4rem;
`;
