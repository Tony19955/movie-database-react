import styled from 'styled-components';

export const AppWrapper = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background: url(/nightsky.jpg) fixed center;

    main {
        width: 100%;
        display: flex;
        padding: 2rem;
        align-items: center;
        flex-direction: column;
        min-height: calc(100vh - 15rem);
        @media only screen and (min-width: 32rem) {
            padding: 2rem 4rem;
        }
        @media only screen and (min-width: 60rem) {
            padding: 2rem 6rem;
        }
        @media only screen and (min-width: 96rem) {
            padding: 2rem 8rem;
        }
        @media only screen and (min-width: 128rem) {
            padding: 2rem 10rem;
        }
    }
`;
