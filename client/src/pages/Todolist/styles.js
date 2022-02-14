import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import colors from "../../utils/style/colors";
import device from "../../utils/style/device";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 5em;
`;

export const CardContainer = styled.div`
    width: 75%;
    border-radius: 50px;
    box-shadow: 0 0 15px ${colors.primary};
`;

export const CardHeader = styled.div`
    padding: 0.68em 1.22em;
    text-align: center;
    color: ${colors.primary};
    border-bottom: 2px solid ${colors.primaryOpacity};
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`;

export const CardBody = styled.div`
    padding: 1.22em;
`;

export const TextNoData = styled.div`
    text-align: center;
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.68em 1.22em;
    border-top: 2px solid ${colors.primaryOpacity};
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const FooterLeftDiv = styled.div`
    display: flex;
    align-items: center;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: flex-start;

        & label {
            margin-bottom: 0.8em;
        }
    }
`;

export const IconPlus = styled(FontAwesomeIcon)`
    position: relative;
    color: ${colors.primary};
    font-size: 1.2em;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;
