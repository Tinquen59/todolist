import PropTypes from "prop-types";
import GroupButtonTask from "../GroupButtonTask/GroupButtonTask";

import { TaskContainer, TaskDescription } from "./styles";
import { InputCheckbox } from "../../utils/style/Atoms";

function Task({
    id,
    description,
    isChecked,
    removeTask,
    handleChangeCheckbox,
}) {
    isChecked = isChecked !== undefined ? isChecked : false;
    return (
        <TaskContainer>
            <InputCheckbox
                type="checkbox"
                name={id}
                checked={isChecked}
                onChange={handleChangeCheckbox}
            />

            <TaskDescription>{description}</TaskDescription>

            <GroupButtonTask taskId={id} removeTask={removeTask} />
        </TaskContainer>
    );
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    removeTask: PropTypes.func.isRequired,
    handleChangeCheckbox: PropTypes.func.isRequired,
};

export default Task;
