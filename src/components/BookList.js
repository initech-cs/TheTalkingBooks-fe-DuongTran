import React from "react";
import BookCard from "./BookCard";
import "./Book.css";

export default function BookList(props) {
  if (props.bookList == null) {
    return <div>no data...</div>;
  }
  return (
    <div class="book-list">
      {props.bookList.map((item, i) => (
        <BookCard data={item} />
      ))}
    </div>
  );
}
