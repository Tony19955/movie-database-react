import styled from 'styled-components';

export const StyledMovieListWrapper = styled.div`
    gap: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const StyledMovieListItems = styled.div`
    gap: 2rem;
    width: 100%;
    display: grid;
    margin-bottom: 5rem;
    grid-template-columns: 1fr;
    @media only screen and (min-width: 32rem) {
        grid-template-columns: repeat(2, calc((50% - 1.5rem)));
    }
    @media only screen and (min-width: 60rem) {
        grid-template-columns: repeat(3, calc((100% / 3) - 1.5rem));
    }
    @media only screen and (min-width: 96rem) {
        grid-template-columns: repeat(4, calc((100% / 4) - 1.5rem));
    }
    @media only screen and (min-width: 128rem) {
        grid-template-columns: repeat(6, calc((100% / 6) - 1.5rem));
    }
`;
