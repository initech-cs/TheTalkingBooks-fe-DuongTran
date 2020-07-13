import React from "react";
import "./Book.css";

import { Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BookCard(props) {
  const showData = () => {
    console.log(props.data);

    if (props.data !== undefined) {
      return (
        <div class="cardItem">
          <img src={props.data.volumeInfo.imageLinks.thumbnail} />
          <h5>{props.data.volumeInfo.title}</h5>
          <p>{props.data.volumeInfo.authors[0]}</p>
          <p>{props.data.volumeInfo.authors[1]}</p>
          {/* {props.data.volumeInfo.imageLinks.thumbnail} */}
        </div>
      );
    }
  };

  if (!props.data) {
    return <div> </div>;
  }
  return <div>{showData()}</div>;
}
