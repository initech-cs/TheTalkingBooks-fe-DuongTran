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
            image: props.data.image,
            description: props.data.description,
            publishedDate: props.data.publishedDate,
            averageRating: props.data.averageRating,
            pageCount: props.data.pageCount,
          }}
        >
          <img src={props.data.image} />
          <h5 class="book-title">{props.data.title}</h5>
        </Link>
        <p>{props.data.authors[0]}</p>
        <span class="book-genre">{props.data.genres[0].genre}</span>
      </div >
    );
  }
}
