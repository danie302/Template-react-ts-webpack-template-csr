// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "@pages/home/index";
import Page404 from "@pages/404/";
import Default from "@templates/default/";

const AppRoutes = (): JSX.Element => (
    <Default>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route component={Page404} />
        </Switch>
    </Default>
);

export default AppRoutes;
