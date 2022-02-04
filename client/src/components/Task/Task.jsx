import PropTypes from "prop-types";
import GroupButtonTask from "../GroupButtonTask/GroupButtonTask";

import { TaskContainer, TaskInput, TaskDescription } from "./styles";

function Task({ id, description, removeTask }) {
    return (
        <TaskContainer>
            <TaskInput type="checkbox" value={id} />

            <TaskDescription>{description}</TaskDescription>

            <GroupButtonTask taskId={id} removeTask={removeTask} />
        </TaskContainer>
    );
}

Task.propTypes = {
    description: PropTypes.string,
};

export default Task;
