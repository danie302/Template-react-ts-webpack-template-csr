// Dependencies
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any): JSX.Element => {
    const routeComponent = () =>
        isAuthenticated ? React.createElement(component) : <Redirect to={{ pathname: "/login" }} />;
    return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
