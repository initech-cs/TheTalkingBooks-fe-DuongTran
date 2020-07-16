import React, { useState } from "react";
import "./AddBook.css";

export default function AddBook() {
  const [books, setBooks] = useState([]);
  async function searchBook(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyCnPWo4MUML7E8asN_7WHC9tsDg9AVtMoY`;
    const res = await fetch(url);
    const data = await res.json();
    setBooks(data.items.map((e) => e.volumeInfo));
  }
  console.log(books);

  async function addToDatabase({
    categories: genres,
    title,
    authors,
    publishedDate,
    description,
    pageCount,
    industryIdentifiers,
    imageLinks,
    averageRating,
  }) {
    let body = {
      genres,
      title,
      authors,
      publishedDate,
      description,
      pageCount,
      isbn13: industryIdentifiers
        ? industryIdentifiers[0].identifier || ""
        : "ISBN Unknown",
      image: (imageLinks && imageLinks.thumbnail) || "",
      averageRating: averageRating,
    };
    postBook(body);
    alert("Book has been added to the collection");
  }

  async function postBook(body) {
    const res = await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const item = await res.json();
    console.log(item);
  }

  function renderBooks(arr) {
    return arr.map((book) => {
      return (
        <div class="book-search-result">
          <h5>{book.title}</h5>
          {book.authors && (
            <p>
              <small>{book.authors.join(", ")}</small>
            </p>
          )}
          {book.imageLinks && book.imageLinks.thumbnail && (
            <img src={book.imageLinks.thumbnail} alt={book.title} />
          )}

          <button onClick={() => addToDatabase(book)}>
            {" "}
            Add book to database
          </button>
        </div>
      );
    });
  }

  return (
    <div>
      <form onSubmit={searchBook} class="search-book">
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Enter book title to search"
        />
      </form>

      {renderBooks(books)}
    </div>
  );
}
