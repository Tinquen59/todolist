import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import colors from "../../utils/style/colors";
import device from "../../utils/style/device";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.5);
`;

export const ModalContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    /* width: 50%; */
    padding: 1.6em 2em;
    background-color: ${colors.backgroundLight};
    border-radius: 50px;

    @media ${device.tablet} {
        width: 75%;
    }
`;

export const IconClose = styled(FontAwesomeIcon)`
    position: absolute;
    top: 1em;
    right: 1.17em;
    font-size: clamp(20px, 1.667vw, 30px);
    color: ${colors.primary};
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${colors.secondary};
        transform: rotate(180deg);
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    &,
    & label {
        width: 100%;
    }
`;

export const SpanLabel = styled.span`
    display: block;
    text-align: center;
    font-size: clamp(30px, 2.222vw, 40px);
`;

export const TextareaDescription = styled.textarea`
    resize: none;
    font-family: "Roboto Regular";
    font-size: clamp(18px, 1.222vw, 22px);
    padding: 0.9em 1.2em;
    margin-top: 1.82em;
    margin-bottom: 1.82em;
    width: 620px;
    height: 210px;
    border-radius: 50px;
    outline-color: ${colors.primary};

    @media ${device.tablet} {
        width: 100%;
    }
`;
