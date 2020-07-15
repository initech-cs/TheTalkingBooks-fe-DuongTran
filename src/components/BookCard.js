import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";
import { Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BookCard(props) {
  if (!props.data) {
    return <div>not even a single line here</div>;
  }

  if (props.data) {
    return (
      <div class="cardItem">
        <Link
          to={{
            pathname: `/books/${props.data._id}`,
            title: props.data.title,
            authors: props.data.authors,
          }}
        >
          {/* <img
            src={`http://covers.openlibrary.org/b/isbn/${props.data.title}-M.jpg`}
          /> */}
          <img src={props.data.image} />
          <h5>{props.data.title}</h5>
          {/* <p>{props.data.volumeInfo.authors[0]}</p>
        <p>{props.data.volumeInfo.authors[1]}</p> */}
          {/* {props.data.volumeInfo.imageLinks.thumbnail} */}
        </Link>
        <p>{props.data.authors[0]}</p>
        <span class="book-genre">{props.data.genres[0].genre}</span>
      </div>
    );
  }
}
