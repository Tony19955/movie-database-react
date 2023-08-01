import styled from 'styled-components';
import { BLACK_07, FREE_SPEECH_BLUE, WHITE } from '../styles/colors';

export const StyledFooterWrapper = styled.div`
    left: 0;
    bottom: 0;
    gap: 0.5rem;
    width: 100%;
    height: 7rem;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: ${BLACK_07};
    border-top: 0.1rem solid ${WHITE};

    > a {
        .github-icon {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

export const StyledAuthorCredits = styled.p`
    display: flex;
    align-items: flex-end;
    color: ${WHITE};
    font-size: 1.2rem;
`;

export const StyledCopyright = styled.p`
    font-size: 1.2rem;
    margin-left: 0.5rem;
    color: ${FREE_SPEECH_BLUE};
`;

export const StyledSingleLine = styled.div`
    display: flex;
    align-items: flex-end;
`;
