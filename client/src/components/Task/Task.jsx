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
    description: PropTypes.string,
};

export default Task;
