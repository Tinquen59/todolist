import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import colors from "../../utils/style/colors";

const Buttons = `
    padding: .2em 0.6em;
    border: 2px solid;
    cursor: pointer;
`;

export const ButtonEdit = styled.button`
    ${Buttons}
    border-right: none;
    border-color: ${colors.primary};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    color: ${colors.backgroundLight};
    background-color: ${colors.primary};
`;

export const ButtonDelete = styled.button`
    ${Buttons}
    border-left: none;
    border-color: ${colors.red};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: ${colors.backgroundLight};
    background-color: ${colors.red};
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: clamp(15px, 1.222vw, 22px);
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: rotate(1turn);
    }
`;
