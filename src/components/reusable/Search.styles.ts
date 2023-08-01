import styled from 'styled-components';

import { FREE_SPEECH_BLUE, FREE_SPEECH_BLUE_04, VERY_LIGHT_GREY, WHITE } from '../../styles/colors';

export const StyledSearchWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 4.5rem;
    padding: 0 1.5rem;
    align-items: center;
    border-radius: 2.25rem;
    background: ${FREE_SPEECH_BLUE_04};
    border: 0.2rem solid ${FREE_SPEECH_BLUE};
    @media only screen and (min-width: 60rem) {
        min-width: 40rem;
        width: fit-content;
    }

    .search-icon {
        width: 2rem;
        height: 2rem;
        fill: ${WHITE};
        margin-right: 1rem;
    }
`;

export const StyledSearchInput = styled.input`
    width: 100%;
    height: 100%;
    color: ${WHITE};
    background: none;
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    &::placeholder {
        font-weight: 600;
        font-size: 1.3rem;
        color: ${VERY_LIGHT_GREY};
    }

    &:focus {
        &::placeholder {
            color: ${WHITE};
        }
    }
`;
