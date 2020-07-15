import React from "react";

export default function Details(props) {
  console.log(props);
  // if (props.data == null) {
  //   return <div>no data...</div>;
  // }
  const isbn = props.match.params.id;
  return (
    <div>
      Details page
      <div>{props.location.title}</div>
      <div>{props.location.authors}</div>
    </div>
  );
}
