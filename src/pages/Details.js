import React from "react";

export default function Details(props) {
  console.log(props);
  const isbn = props.match.params.id;
  return <div>Details page{isbn}</div>;
}
