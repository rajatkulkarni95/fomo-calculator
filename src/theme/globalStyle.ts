import { createGlobalStyle } from "styled-components";
import { font } from "./theme";

const GlobalStyle = createGlobalStyle`
    html,body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${font.family};
        height: 100vh;
        background: ${({ theme }) => theme.background};
        color:  ${({ theme }) => theme.text};
    }
`;

export default GlobalStyle;
