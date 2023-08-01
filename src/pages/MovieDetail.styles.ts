import styled from 'styled-components';
import { BLACK, FREE_SPEECH_BLUE, GREY, NERO, WHITE } from '../styles/colors';

export const StyledMovieDetailWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const StyledMovieDetailHeader = styled.div`
    width: 100%;
    background: ${GREY};
`;

export const StyledMovieTitleWrapper = styled.div`
    gap: 1.5rem;
    display: flex;
    padding: 2rem;
    align-items: center;
    background: ${BLACK};
    justify-content: center;
    border-bottom: 0.1rem solid ${WHITE};

    .star-icon {
        width: 3rem;
        height: 3rem;
        stroke: ${FREE_SPEECH_BLUE};
    }
`;

export const StyledMovieTitle = styled.h1`
    color: ${WHITE};
    font-weight: 900;
    font-size: 2.5rem;
`;

export const StyledMovieYear = styled.h2`
    color: ${WHITE};
    font-weight: 500;
    font-size: 1.7rem;
`;

export const StyledMovieGeneralInfo = styled.div`
    gap: 1rem;
    display: flex;
    align-items: center;
`;

export const StyledMovieImage = styled.img`
    width: 40%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
`;

export const StyledGeneralInfoContent = styled.div`
    gap: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledInfoRow = styled.div`
    display: flex;
    align-items: center;
    background: ${WHITE};
    border-radius: 0.5rem 0;

    > p {
        :first-child {
            height: 3rem;
            display: flex;
            color: ${WHITE};
            font-weight: 800;
            font-size: 1.4rem;
            padding: 0 1rem;
            background: ${NERO};
            align-items: center;
            letter-spacing: 0.1rem;
            border-radius: 0.5rem 0;
        }

        :last-child {
            height: 3rem;
            display: flex;
            font-weight: 800;
            font-size: 1.4rem;
            padding: 0 1rem;
            align-items: center;
            color: ${FREE_SPEECH_BLUE};
        }
    }
`;

export const StyledAboutWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 3rem;
    background: ${WHITE};
    flex-direction: column;
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
    margin-top: 3rem;
    gap: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
        text-transform: uppercase;
    }
`;
