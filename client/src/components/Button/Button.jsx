import PropTypes from "prop-types";

import { MyButton } from "./styles";

function Button({ contentButton, typeButton, isDisabled, deleteManyTasks }) {
    return (
        <MyButton
            $type={typeButton}
            disabled={isDisabled}
            onClick={deleteManyTasks}
        >
            {contentButton}
        </MyButton>
    );
}

Button.propTypes = {
    contentButton: PropTypes.string.isRequired,
    typeButton: PropTypes.string,
    isDisable: PropTypes.bool,
    deleteManyTasks: PropTypes.func,
};

export default Button;
