import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function index({ component: Comp, ...rest }) {
  return rest.user &&
    (rest.user.user.role === "normal" || rest.user.user.role === "normal") ? (
    <Route {...rest} render={() => <Comp {...rest} />} />
  ) : (
    <Redirect to="/login" />
  );
}
