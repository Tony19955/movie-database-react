import styled from 'styled-components';
import { WHITE } from '../styles/colors';

export const StyledFavouriteMoviesWrapper = styled.div`
    gap: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const StyledNoFavouritesHeading = styled.h1`
    color: ${WHITE};
    font-weight: 800;
    font-size: 2.2rem;
`;
