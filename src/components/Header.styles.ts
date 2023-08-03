import styled from 'styled-components';
import { BLACK_07, ROYAL_BLUE, WHITE } from '../styles/colors';

export const StyledHeaderWrapper = styled.header`
    gap: 3rem;
    width: 100%;
    height: 8rem;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    flex-direction: row;
    background: ${BLACK_07};
    justify-content: space-between;
    border-bottom: 0.1rem solid ${WHITE};
    @media only screen and (min-width: 32rem) {
        padding: 0rem 3rem;
    }

    .popcorn-icon {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
    }

    > a {
        flex: 1;
        display: flex;

        :nth-child(2) {
            justify-content: center;
        }

        button {
            .star-icon {
                width: 2.5rem;
                height: 2.5rem;
                fill: ${WHITE};
            }
        }
    }

    > div {
        flex: 1;
        justify-content: flex-end;
    }
`;

export const StyledButton = styled.button`
    flex: 1;
    display: flex;
    font-size: 2rem;
    align-items: center;

    > p {
        display: none;
    }
    @media only screen and (min-width: 32rem) {
        > p {
            display: block;
            color: ${ROYAL_BLUE};
            font-family: Bungee Inline, cursive;
            border-top: 0.2rem solid transparent;
            border-bottom: 0.2rem solid transparent;
        }
        :hover > p {
            border-bottom: 0.2rem solid ${ROYAL_BLUE};
        }
    }
`;
