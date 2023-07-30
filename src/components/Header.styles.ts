import { styled } from 'styled-components';

import { BLACK_07, WHITE } from '../styles/colors';

export const StyledHeaderWrapper = styled.header`
    padding: 0.5rem;
    background: ${BLACK_07};
    border-bottom: 0.1rem solid ${WHITE};

    svg {
        width: auto;
        height: 4rem;
    }
`;
