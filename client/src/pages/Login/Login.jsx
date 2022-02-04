import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import instance from "../../utils/instanceAxios";

import CardConexion from "../../components/Cards/CardConexion/CardConexion";
import FormGroup from "../../components/FormGroup/FormGroup";
import Button from "../../components/Button/Button";
import CardChangeConnexion from "../../components/Cards/CardChangeConnexion/CardChangeConnexion";

import { TitleConenxion, StyledLink } from "../../utils/style/Atoms";
import { LoginContainer, FormContainer } from "./styles";

const schema = yup.object({
    email: yup.string().trim().required(),
    password: yup.string().trim().required(),
});

export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const [isSend, setIsSend] = useState(false);

    const onSubmit = (data) => {
        instance
            .post("/users/login", data)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.userId);

                setIsSend(true);
            })
            .catch((error) => {
                console.log(error.response.status);
            });
    };

    useEffect(() => {
        // If have token go to home page
        if (localStorage.getItem("token") && isSend) navigate("/");
    }, [isSend, navigate]);

    return (
        <LoginContainer>
            <CardConexion>
                <TitleConenxion>Connection</TitleConenxion>

                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup
                        labelText="Mail"
                        typeInput="text"
                        register={register("email")}
                        isRequired={true}
                    />

                    <FormGroup
                        labelText="Mot de passe"
                        typeInput="password"
                        register={register("password")}
                        isRequired={true}
                    />

                    <Button contentButton="Connection" typeButton="submit" />
                </FormContainer>
            </CardConexion>

            <CardChangeConnexion>
                <p>Vous n'avez pas de compte ?</p>
                <StyledLink to="/inscription">Inscrivez-vous</StyledLink>
            </CardChangeConnexion>
        </LoginContainer>
    );
}
