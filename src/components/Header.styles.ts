import styled from 'styled-components';
import { BLACK_07, ROYAL_BLUE, WHITE } from '../styles/colors';

export const StyledHeaderWrapper = styled.header`
    width: 100%;
    height: 8rem;
    display: flex;
    padding: 0 3rem;
    align-items: center;
    background: ${BLACK_07};
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 0.1rem solid ${WHITE};

    .popcorn-icon {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
    }

    > a > button {
        .star-icon {
            width: 2.5rem;
            height: 2.5rem;
            fill: ${WHITE};
        }
    }
`;

export const StyledButton = styled.button`
    display: flex;
    font-size: 2rem;
    align-items: center;
    color: ${ROYAL_BLUE};
    font-family: Bungee Inline, cursive;

    &:hover {
        text-decoration: 'underline';
    }
`;
