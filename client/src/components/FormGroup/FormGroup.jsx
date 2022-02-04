import PropTypes from "prop-types";

import { LabelContainer, LabelText, Input } from "./styles";

function FormGroup({ labelText, typeInput, register, isRequired }) {
    return (
        <LabelContainer>
            <LabelText>{labelText} :</LabelText>
            <Input type={typeInput} {...register} required={isRequired} />
        </LabelContainer>
    );
}

FormGroup.prototype = {
    labelText: PropTypes.string.isRequired,
};

export default FormGroup;
