import CardConexion from "../../components/Cards/CardConexion/CardConexion";
import FormGroup from "../../components/FormGroup/FormGroup";
import Button from "../../components/Button/Button";
import CardChangeConnexion from "../../components/Cards/CardChangeConnexion/CardChangeConnexion";

import { TitleConenxion, StyledLink } from "../../utils/style/Atoms";
import { SignupContainer, FormContainer } from "./styles";

export default function Signup() {
    return (
        <SignupContainer>
            <CardConexion>
                <TitleConenxion>Inscription</TitleConenxion>

                <FormContainer>
                    <FormGroup labelText="Pseudo" />

                    <FormGroup labelText="Mail" />

                    <FormGroup labelText="Mot de passe" />

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
