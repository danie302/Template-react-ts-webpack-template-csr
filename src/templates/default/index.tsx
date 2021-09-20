// Dependencies
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Assets
import "./index.scss";

interface TemplateProps {
    children?: React.ReactNode;
}

function Default({ children }: TemplateProps): JSX.Element {
    return (
        <>
            <Router>{children}</Router>
        </>
    );
}

export default Default;
