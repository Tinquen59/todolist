import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../utils/callAPI";

import CardConexion from "../../components/Cards/CardConexion/CardConexion";
import FormGroup from "../../components/FormGroup/FormGroup";
import Button from "../../components/Button/Button";
import CardChangeConnexion from "../../components/Cards/CardChangeConnexion/CardChangeConnexion";

import { TitleConenxion, StyledLink } from "../../utils/style/Atoms";
import { SignupContainer, FormContainer } from "./styles";

const schema = yup.object({
    pseudo: yup.string().trim().required(),
    email: yup.string().trim().required(),
    password: yup.string().trim().required(),
});

export default function Signup() {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const [isSend, setIsSend] = useState(false);
    const [error, setError] = useState(false);

    const onSignup = async (data) => {
        console.log("data", data);
        try {
            const response = await postRequest(`/users/signup`, data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);

            setIsSend(true);
        } catch (error) {
            setError(error);
            console.log(error);
        }
    };

    useEffect(() => {
        // If have token go to home page
        if (!!localStorage.getItem("token") != null && isSend) navigate("/");
    }, [isSend, navigate]);

    return (
        <SignupContainer>
            <CardConexion>
                <TitleConenxion>Inscription</TitleConenxion>

                <FormContainer onSubmit={handleSubmit(onSignup)}>
                    <FormGroup
                        labelText="Pseudo"
                        typeInput="text"
                        register={register("pseudo")}
                        isRequired={true}
                    />

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
                <p>Vous avez un compte ?</p>
                <StyledLink to="/connection">Connectez-vous</StyledLink>
            </CardChangeConnexion>
        </SignupContainer>
    );
}
