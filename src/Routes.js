import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import NewWeek from "./containers/NewWeek";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/week/new" exact component={NewWeek} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;