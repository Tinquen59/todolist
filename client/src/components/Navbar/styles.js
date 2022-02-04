import styled from "styled-components";

import colors from "../../utils/style/colors";

export const HomeLogo = styled.a`
    color: ${colors.third};
    font-size: clamp(45px, 3.333vw, 60px);
    font-family: "Neonderthaw";
    cursor: pointer;
`;

export const HeaderContainer = styled.header`
    background-color: ${colors.primary};
    padding: 0.8em 2em;
`;
