import { useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

export default function DisplayNavbar() {
    const DiplayOrNot = () => {
        const location = useLocation();
        const { pathname } = location;

        if (pathname === "/connection" || pathname === "/inscription")
            return <></>;

        return <Navbar />;
    };

    return <DiplayOrNot />;
}
