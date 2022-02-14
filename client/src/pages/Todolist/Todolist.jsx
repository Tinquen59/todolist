import { useEffect, useState } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import axiosClient from "../../utils/instanceAxios";

import { getRequest, deleteRequest, postRequest } from "../../utils/callAPI";
import Task from "../../components/Task/Task";
import Button from "../../components/Button/Button";

import { InputCheckbox } from "../../utils/style/Atoms";
import {
    Container,
    CardContainer,
    CardHeader,
    CardBody,
    CardFooter,
    FooterLeftDiv,
    IconPlus,
    TextNoData,
} from "./styles";

export default function Todolist() {
    const location = useLocation();

    const [allTasks, setAllTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChangeCheckbox = (e) => {
        const { name, checked } = e.target;
        let tempAllTasks = [];

        if (name === "allChecked") {
            tempAllTasks = allTasks.map((task) => ({
                ...task,
                isChecked: checked,
            }));
        } else {
            tempAllTasks = allTasks.map((task) =>
                task._id === name ? { ...task, isChecked: checked } : task
            );
        }

        setAllTasks(tempAllTasks);
    };

    const deleteManyTasks = async () => {
        try {
            const tasksToDelete = allTasks
                .filter((task) => task?.isChecked)
                .map((task) => ({
                    _id: task._id,
                }));

            console.log("tasks to delete", tasksToDelete);

            const response = await postRequest(
                `/tasks/remove-many-tasks`,
                tasksToDelete
            );

            console.log(response);

            getAllTasks();
        } catch (error) {
            console.log(error);
        }
    };

    const getAllTasks = async () => {
        try {
            console.log(
                "client axios",
                axiosClient.defaults.headers.common["Authorization"]
            );

            const response = await getRequest("tasks/all-tasks");
            console.log(response);

            setAllTasks(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const removeTask = async (id) => {
        try {
            // console.log("id", id);
            const response = await deleteRequest(`tasks/task/${id}`);
            console.log("response delete", response);

            setIsLoading(true);
            getAllTasks();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (location.pathname === "/") {
            console.log("mon token", localStorage.getItem("token"));

            setIsLoading(true);

            /* const timer = setTimeout(() => {
            getAllTasks();
        }, 5000);

        return () => clearTimeout(timer); */

            getAllTasks();
        }
    }, [location.pathname]);

    useEffect(() => {
        console.log("------------");
        console.log(
            "je change",
            axiosClient.defaults.headers.common["Authorization"]
        );
        console.log("------------");
    }, [axiosClient.defaults.headers.common["Authorization"]]);

    if (error) return <h1>Oups, une erreur est survenue</h1>;

    return (
        <Container>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <CardContainer>
                    <CardHeader>
                        <h2>Ma Todo</h2>
                    </CardHeader>

                    <CardBody>
                        {allTasks.length ? (
                            allTasks.map(
                                ({ _id, description, isChecked }, index) => (
                                    <Task
                                        id={_id}
                                        description={description}
                                        isChecked={isChecked}
                                        removeTask={removeTask}
                                        handleChangeCheckbox={
                                            handleChangeCheckbox
                                        }
                                        key={index}
                                    />
                                )
                            )
                        ) : (
                            <TextNoData>Vous n'avez pas de tâche !</TextNoData>
                        )}
                    </CardBody>

                    <CardFooter>
                        <FooterLeftDiv>
                            <label>
                                <InputCheckbox
                                    type="checkbox"
                                    name="allChecked"
                                    checked={
                                        allTasks.filter(
                                            (task) => task?.isChecked !== true
                                        ).length < 1
                                    }
                                    onChange={handleChangeCheckbox}
                                />
                                <span>Tout sélectionner</span>
                            </label>
                            <Button
                                contentButton="Supprimer la sélection"
                                typeButton="deleteMany"
                                isDisabled={
                                    allTasks.filter(
                                        (task) => task?.isChecked === true
                                    ).length < 1
                                }
                                deleteManyTasks={deleteManyTasks}
                            />
                        </FooterLeftDiv>

                        <Link to="new-task">
                            <IconPlus icon={faPlusCircle} />
                        </Link>
                    </CardFooter>
                </CardContainer>
            )}

            <Outlet />
        </Container>
    );
}
