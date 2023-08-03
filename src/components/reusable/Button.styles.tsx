import styled from 'styled-components';
import { FREE_SPEECH_BLUE, RESOLUTION_BLUE, WHITE } from '../../styles/colors';

export const StyledButton = styled.button<{ rounded?: boolean; secondary?: boolean }>`
    gap: 1rem;
    display: flex;
    height: 4.5rem;
    color: ${WHITE};
    font-weight: 600;
    font-size: 1.4rem;
    padding: 0 1.5rem;
    width: fit-content;
    white-space: nowrap;
    align-items: center;
    transition: 200ms all;
    letter-spacing: 0.1rem;
    justify-content: center;
    background: ${RESOLUTION_BLUE};
    border: 0.2rem solid ${FREE_SPEECH_BLUE};
    border-radius: ${({ rounded }) => (rounded ? '0.5rem' : 0)};
    @media only screen and (min-width: 600px) {
        transition: background-color 200ms all;
        :hover {
            background: ${FREE_SPEECH_BLUE};
        }
    }
`;
