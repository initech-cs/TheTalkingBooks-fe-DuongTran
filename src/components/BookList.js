import React from "react";
import BookCard from "./BookCard";
import "./Book.css";
import { useState, useEffect } from "react";

export default function BookList() {
  const [bookList, setbookList] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:5000/books");
      const items = await data.json();
      setbookList(items.data);
      console.log(items.data)
    }
    fetchData();
  }, [])

  if (bookList == null) {
    return <div>no data...</div>;
  }
  return (
    <div class="book-list">
      {bookList.map((item, i) => (
        <BookCard data={item} key={`book${i}`} />
      ))}
    </div>
  );
}
