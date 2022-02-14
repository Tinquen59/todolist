import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { ButtonEdit, ButtonDelete, Icon } from "./styles";

function GroupButtonTask({ taskId, removeTask }) {
    const navigate = useNavigate();

    return (
        <div>
            <ButtonEdit
                onClick={() =>
                    navigate(`task/${taskId}`, { state: "editMode" })
                }
            >
                <Icon icon={faPen} />
            </ButtonEdit>
            <ButtonDelete onClick={() => removeTask(taskId)}>
                <Icon icon={faTrashAlt} />
            </ButtonDelete>
        </div>
    );
}

GroupButtonTask.propTypes = {
    taskId: PropTypes.string.isRequired,
    removeTask: PropTypes.func.isRequired,
};

export default GroupButtonTask;
