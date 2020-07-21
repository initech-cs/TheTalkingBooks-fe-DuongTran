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
      <div className="cardItem">
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
            audioUrl: props.data.audioUrl,
          }}
        >
          <img src={props.data.image} />
          <h5 className="book-title">{props.data.title}</h5>
        </Link>

        <p>{props.data.authors[0]}</p>
        <span className="book-genre">
          {props.data.genres.length > 0 ? props.data.genres[0].genre : null}
        </span>
      </div>
    );
  }
}
