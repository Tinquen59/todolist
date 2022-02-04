import { createGlobalStyle } from "styled-components";

import NeonderthawRegular from "../../assets/fonts/Neonderthaw-Regular.ttf";
import RobotoRegular from "../../assets/fonts/Roboto-Regular.ttf";

import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Neonderthaw",
        src: url(${NeonderthawRegular}) format("truetype");
    }
    @font-face {
        font-family: "Roboto Regular",
        src: url(${RobotoRegular}) format("truetype");
    }

    body{
        background-color: ${colors.backgroundLight};
        font-family: "Roboto Regular";
        font-size: clamp(18px, 1.389vw, 25px);
        min-height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3 {
        font-family: "Neonderthaw";
        line-height: 1.34em;
    }

    h1 {
        font-size: clamp(35px, 2.778vw, 50px);
        color: ${colors.primary};
    }

    button {
        font-size: clamp(18px,1.389vw,25px);
    }
`;

function GlobalStyle() {
    return <StyledGlobalStyle />;
}

export default GlobalStyle;
