import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import Template from "../containers/Template"
import Home from "../containers/Home";
import Profile from "../containers/Profile";


const ViewerQueries = {
    viewer: () => Relay.QL`query { viewer }`
}

const userOnly = (nextState, replace) => {
    if (!auth.getToken()) {
        replace('/')
    }
}
const createRoutes = () => {
    return (
        <Route
            path="/"
            component={Template}
        >
            <IndexRoute

                component={Home}
            />
            <Route

                path={'/profile'}
                component={Profile}
            />
        </Route>

    )
};


const Routes = createRoutes()

export default Routes
