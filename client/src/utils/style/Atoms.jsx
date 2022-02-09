import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "./colors";

export const TitleConenxion = styled.h1`
    text-align: center;
`;

export const StyledLink = styled(Link)`
    color: #000;
`;

export const InputCheckbox = styled.input`
    width: 1.6em;
    height: 1.6em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid ${colors.primary};
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    &:checked {
        background-color: ${colors.secondary};
    }

    & + span {
        margin-left: 0.4em;
        margin-right: 0.8em;
        cursor: pointer;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    }
`;
