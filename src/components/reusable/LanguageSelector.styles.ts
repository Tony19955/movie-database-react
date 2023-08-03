import styled from 'styled-components';

export const StyledLanguageSelectorWrapper = styled.div`
    gap: 1rem;
    display: flex;
    align-items: center;
`;

export const StyledLanguageButton = styled.button<{ active: boolean }>`
    display: flex;
    text-align: left;
    align-items: center;
    transition: 0.3s ease;
    opacity: ${({ active }) => (active ? 1 : 0.5)};
    @media only screen and (min-width: 60rem) {
        :hover {
            opacity: 1;
            transition: 0.3s ease;
        }
    }

    .slovakia-icon,
    .united-kingdom-icon {
        width: 3.5rem;
        height: 3.5rem;
    }
`;
