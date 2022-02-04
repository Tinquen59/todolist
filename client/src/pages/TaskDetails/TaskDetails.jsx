import { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { getRequest, postRequest, putRequest } from "../../utils/callAPI";
import Button from "../../components/Button/Button";

import {
    Container,
    Overlay,
    ModalContainer,
    IconClose,
    FormContainer,
    SpanLabel,
    TextareaDescription,
} from "./styles";

const PATHNAME_NEW_TASK = "/new-task";
const STATE_EDIT_MODE = "editMode";

const schema = yup.object({
    description: yup.string().trim().required(),
});

export default function TaskDetails() {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const [taskDetails, setTaskDetails] = useState({ description: "" });

    const BtnContent =
        location.pathname === PATHNAME_NEW_TASK ? "Ajouter" : "Modifier";

    const addNewtask = async (data) => {
        try {
            const response = await postRequest("/tasks/add-new-task", data);

            if (response.status === 200) navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const changeTaskValue = async (data) => {
        try {
            const response = await putRequest(`/tasks/task/${params.id}`, data);
            console.log("change task value", response);

            if (response.status === 200) navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (data) => {
        console.log(data);
        if (location.pathname === PATHNAME_NEW_TASK) {
            const payload = {
                userId: localStorage.getItem("userId"),
                ...data,
            };
            addNewtask(payload);
        }

        if (location.state === STATE_EDIT_MODE) {
            changeTaskValue(data);
        }
    };

    const getTaskDetails = async () => {
        try {
            const response = await getRequest(`tasks/task/${params.id}`);
            setTaskDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (location.state === STATE_EDIT_MODE) {
            getTaskDetails();
        }
    }, []);

    console.log("location :", location);

    return (
        <Container>
            <Overlay onClick={() => navigate("/")} />
            <ModalContainer>
                <IconClose icon={faTimes} onClick={() => navigate("/")} />
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <SpanLabel>Description : *</SpanLabel>
                        <TextareaDescription
                            {...register("description")}
                            placeholder="Une courte description"
                            required
                            defaultValue={taskDetails.description}
                        ></TextareaDescription>
                    </label>

                    <Button contentButton={BtnContent} typeButton="task" />
                </FormContainer>
            </ModalContainer>
        </Container>
    );
}
