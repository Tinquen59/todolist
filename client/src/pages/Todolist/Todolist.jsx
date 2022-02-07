import { useEffect, useState } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import axiosClient from "../../utils/instanceAxios";

import { getRequest, deleteRequest } from "../../utils/callAPI";
import Task from "../../components/Task/Task";

import {
    Container,
    CardContainer,
    CardHeader,
    CardBody,
    CardFooter,
    TextAction,
    IconPlus,
    TextNoData,
} from "./styles";

export default function Todolist() {
    const location = useLocation();

    const [allTasks, setAllTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

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
                            allTasks.map(({ _id, description }, index) => (
                                <Task
                                    id={_id}
                                    description={description}
                                    key={index}
                                    removeTask={removeTask}
                                />
                            ))
                        ) : (
                            <TextNoData>Vous n'avez pas de tâche !</TextNoData>
                        )}
                    </CardBody>

                    <CardFooter>
                        <div>
                            <TextAction>Tout sélectionner</TextAction>
                            <TextAction>Supprimer la sélection</TextAction>
                        </div>

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
