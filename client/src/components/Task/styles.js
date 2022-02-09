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

export const TaskDescription = styled.p`
    max-width: 50%;
    font-size: clamp(15px, 1.222vw, 22px);
`;
