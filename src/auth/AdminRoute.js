import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function index({ component: Comp, ...rest }) {
  console.log(rest.user);
  return rest.user && rest.user.user.role === "host" ? (
    <Route {...rest} render={() => <Comp {...rest} />} />
  ) : (
    <Redirect to="/login" />
  );
}
