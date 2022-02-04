import styled from "styled-components";

import colors from "../../utils/style/colors";

export const TaskContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:first-child) {
        margin-top: 0.8rem;
    }
`;

export const TaskInput = styled.input`
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
`;

export const TaskDescription = styled.p`
    max-width: 50%;
    font-size: clamp(15px, 1.222vw, 22px);
`;
