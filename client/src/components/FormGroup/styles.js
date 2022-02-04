import styled from "styled-components";

import colors from "../../utils/style/colors";

export const LabelContainer = styled.label`
    display: block;
    margin-top: 1.6em;
`;

export const LabelText = styled.span`
    display: block;
`;

export const Input = styled.input`
    width: 22em;
    height: 2.5em;
    margin-top: 1em;
    padding: 1em;
    border: 1px solid;
    border-radius: 20px;

    &:last-child {
        margin-bottom: 1em;
    }

    &:focus {
        outline-color: ${colors.primary};
    }
    &[type="text"],
    &[type="password"] {
        font-family: "Roboto Regular";
        font-size: clamp(15px, 1.222vw, 22px);
    }
`;
