// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Default from "@templates/default/";

// Routes
const Home = React.lazy(() => import("@pages/home/"));
const Page404 = React.lazy(() => import("@pages/404/"));

const AppRoutes = (): JSX.Element => (
    <Default>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route component={Page404} />
        </Switch>
    </Default>
);

export default AppRoutes;
