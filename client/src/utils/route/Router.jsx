import { Routes, Route } from "react-router-dom";

import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import TaskDetails from "../../pages/TaskDetails/TaskDetails";
import Todolist from "../../pages/Todolist/Todolist";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Todolist />}>
                <Route path="task/:id" element={<TaskDetails />} />
                <Route path="new-task" element={<TaskDetails />} />
            </Route>
            <Route path="/connection" element={<Login />} />
            <Route path="/inscription" element={<Signup />} />
        </Routes>
    );
}
