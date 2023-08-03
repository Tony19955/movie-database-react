import styled from 'styled-components';
import { FREE_SPEECH_BLUE, FREE_SPEECH_BLUE_04, NERO, RESOLUTION_BLUE, WHITE } from '../styles/colors';

export const StyledFavouriteMovieWrapper = styled.div`
    width: 100%;
    display: flex;
    min-height: 25rem;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-width: 32rem) {
        height: 25rem;
        flex-direction: row;
    }
`;

export const StyledMovieImage = styled.img`
    width: 100%;
    height: 100%;
    @media only screen and (min-width: 32rem) {
        width: auto;
    }
`;

export const StyledMovieTitleWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 3rem 1.5rem;
    justify-content: center;
    background: ${FREE_SPEECH_BLUE_04};
`;

export const StyledMovieTitle = styled.h1`
    color: ${WHITE};
    padding: 0 2rem;
    font-weight: 700;
    font-size: 1.9rem;
`;

export const StyledButtonsWrapper = styled.div`
    gap: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 3rem;
    background: ${NERO};
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    @media only screen and (min-width: 32rem) {
        width: fit-content;
        flex-direction: column;
        justify-content: center;
        border-bottom-left-radius: 0;
        border-top-right-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
    }
`;

export const StyledRemoveButton = styled.button`
    width: 4.5rem;
    height: 4.5rem;
    min-width: 4.5rem;
    min-height: 4.5rem;
    border-radius: 50%;
    background: ${RESOLUTION_BLUE};
    border: 0.2rem solid ${FREE_SPEECH_BLUE};

    :hover {
        background: ${FREE_SPEECH_BLUE};
    }

    .trash-bin-icon {
        width: 2rem;
        fill: ${WHITE};
        height: 2.5rem;
        min-width: 2rem;
        min-height: 2.5rem;
    }
`;
