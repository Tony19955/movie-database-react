import styled from 'styled-components';
import { BLACK, FREE_SPEECH_BLUE, GREY, NERO, SAFFRON, WHITE } from '../styles/colors';
import Button from '../components/reusable/Button';

export const StyledMovieDetailWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 5px 8px;
    @media only screen and (min-width: 32rem) {
        width: 80%;
    }
    @media only screen and (min-width: 60rem) {
        width: 70%;
    }
    @media only screen and (min-width: 96rem) {
        width: 50%;
    }
    @media only screen and (min-width: 128rem) {
        width: 40%;
    }
`;

export const StyledMovieDetailHeader = styled.div`
    width: 100%;
`;

export const StyledMovieTitleWrapper = styled.div`
    gap: 1.5rem;
    display: flex;
    padding: 2rem;
    align-items: center;
    background: ${NERO};
    flex-direction: column;
    justify-content: center;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom: 0.1rem solid ${WHITE};
    @media only screen and (min-width: 60rem) {
        flex-direction: row;
    }
`;

export const StyledMovieTitle = styled.h1`
    color: ${WHITE};
    font-weight: 900;
    font-size: 2.2rem;
`;

export const StyledMovieYear = styled.h2`
    color: ${WHITE};
    font-weight: 500;
    font-size: 1.7rem;
`;

export const StyledMovieGeneralInfo = styled.div`
    display: flex;
    background: ${GREY};
    align-items: center;
    flex-direction: column;
    @media only screen and (min-width: 60rem) {
        flex-direction: row;
    }
`;

export const StyledFavouritesButton = styled(Button)<{ favourite?: boolean }>`
    width: 100%;
    margin: 1.5rem 0;
    align-self: center;
    @media only screen and (min-width: 60rem) {
        width: fit-content;
    }

    .star-icon {
        width: 3rem;
        height: 3rem;
        min-width: 3rem;
        min-height: 3rem;
        stroke: ${FREE_SPEECH_BLUE};
        fill: ${({ favourite }) => favourite && `${SAFFRON}`};
    }
`;

export const StyledMovieImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    @media only screen and (min-width: 60rem) {
        width: 40%;
    }
`;

export const StyledGeneralInfoContent = styled.div`
    gap: 2rem;
    width: 100%;
    display: flex;
    padding: 2rem 2rem;
    flex-direction: column;
    align-items: flex-start;
    @media only screen and (min-width: 60rem) {
        padding: 3rem;
    }
`;

export const StyledInfoRow = styled.div`
    display: flex;
    align-items: center;
    background: ${WHITE};
    border-radius: 0.5rem 0;

    > p {
        :first-child {
            height: 4rem;
            display: flex;
            color: ${WHITE};
            padding: 0 1rem;
            font-weight: 800;
            font-size: 1.4rem;
            background: ${NERO};
            align-items: center;
            letter-spacing: 0.1rem;
            border-radius: 0.5rem 0;
        }

        :last-child {
            height: 4rem;
            display: flex;
            padding: 0 1rem;
            font-weight: 500;
            font-size: 1.4rem;
            align-items: center;
            color: ${FREE_SPEECH_BLUE};
        }
    }
`;

export const StyledAboutWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 2rem;
    background: ${WHITE};
    flex-direction: column;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    @media only screen and (min-width: 60rem) {
        padding: 3rem;
    }
`;

export const StyledAboutHeading = styled.h2`
    color: ${BLACK};
    font-weight: 800;
    font-size: 2.3rem;
`;

export const StyledPlot = styled.p`
    margin: 1rem 0;
    color: ${BLACK};
    font-size: 1.4rem;
    letter-spacing: 0.05rem;
`;

export const StyledAboutInfoRow = styled.div`
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > p {
        font-weight: 400;
        font-size: 1.3rem;
        letter-spacing: 0.1rem;

        > strong {
            font-weight: 900;
            margin-right: 0.5rem;
            letter-spacing: 0.05rem;
        }
    }
`;

export const StyledActionButtons = styled.div`
    gap: 1rem;
    width: 100%;
    display: flex;
    margin-top: 3rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media only screen and (min-width: 60rem) {
        flex-direction: row;
    }

    > a {
        width: 100%;
        @media only screen and (min-width: 60rem) {
            width: fit-content;
        }

        button {
            width: 100%;
            text-transform: uppercase;
            @media only screen and (min-width: 60rem) {
                width: fit-content;
            }
        }
    }
`;
