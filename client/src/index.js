import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import DisplayNavbar from "./utils/displayTemplate/DisplayNavbar";
import GlobalStyle from "./utils/style/GlobalStyle";
import LaRoute from "./utils/route/Router";

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <DisplayNavbar />

        <LaRoute />
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
