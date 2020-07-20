import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function index({ component: Comp, ...rest }) {
  //   console.log(rest.user);

  if (
    rest.user &&
    rest.user.user &&
    (rest.user.user.role === "normal" || rest.user.user.role === "host")
  ) {
    console.log("vo");
    return <Route {...rest} render={() => <Comp {...rest} />} />;
  } else {
    console.log("ra");
    return <Redirect to="/login" />;
  }
}
