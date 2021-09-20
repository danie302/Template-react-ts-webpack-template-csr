/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Dependencies
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any): JSX.Element => {
    const routeComponent = (props: any) =>
        isAuthenticated ? React.createElement(component, props) : <Redirect to={{ pathname: "/login" }} />;
    return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
