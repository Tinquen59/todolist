import { MyButton } from "./styles";

export default function Button({ contentButton, typeButton }) {
    return <MyButton $type={typeButton}>{contentButton}</MyButton>;
}
