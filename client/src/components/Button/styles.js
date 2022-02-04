import styled, { css } from "styled-components";

import colors from "../../utils/style/colors";

export const MyButton = styled.button`
    padding: 0.5em 0.7em;
    font-size: clamp(18px, 1.389vw, 25px);
    border: 2px solid;
    border-radius: 50px;
    transition: background 0.3s ease-in-out, color 0.4s ease-in-out;
    cursor: pointer;
    ${(props) => {
        switch (props.$type) {
            case "form":
                return css`
                    color: ${colors.primary};
                    background-color: ${colors.backgroundLight};
                    border-color: ${colors.primary};
                    &:hover {
                        color: ${colors.third};
                        background-color: ${colors.primary};
                    }
                `;
            case "task":
                return css`
                    color: ${colors.backgroundLight};
                    background-color: ${colors.secondary};
                    border-color: ${colors.secondary};
                    &:hover {
                        color: ${colors.secondary};
                        background-color: ${colors.backgroundLight};
                    }
                `;
            default:
                return css`
                    color: ${colors.primary};
                    border-color: ${colors.primary};
                `;
        }
    }}
`;
