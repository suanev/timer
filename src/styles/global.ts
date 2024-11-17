import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.gray_900};
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        border: none;
        transition: filter 0.2s;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500};
    }
`;
