// Dependencies
import "../i18n/i18n";
import React from "react";
import AppRoutes from "./routes";
import ReactDOM from "react-dom";

// Assets
import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>,
    document.getElementById("root")
);
