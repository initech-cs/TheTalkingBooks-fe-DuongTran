import React from "react";

export default function Details(props) {
  if (props.bookList == null) {
    return <div>no data...</div>;
  }
  const isbn = props.match.params.id;
  return <div>Details page{isbn}</div>;
}
