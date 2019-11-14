import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import inheritance from "../pages/composition-vs-inheritance/composition-vs-inheritance";
import context from "../pages/context/index";

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={inheritance}></Route>
            <Route exact path='/inheritance' component={inheritance}></Route>
            <Route exact path='/context' component={context}></Route>
        </Switch>
    </HashRouter>
)

export default BasicRoute