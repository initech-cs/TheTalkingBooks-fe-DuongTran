import React, { useState } from 'react'

export default function AddBook() {
    const [books, setBooks] = useState([])
    async function searchBook(e) {
        e.preventDefault();
        const title = e.target.title.value
        const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyCnPWo4MUML7E8asN_7WHC9tsDg9AVtMoY`
        const res = await fetch(url);
        const data = await res.json();
        setBooks(data.items.map(e => e.volumeInfo))
    }
    console.log(books)


    async function addToDatabase({
        categories: genres,
        title,
        authors,
        publishedDate,
        description,
        pageCount,
        industryIdentifiers,
        imageLinks
    }) {
        let body = {
            genres,
            title,
            authors,
            publishedDate,
            description,
            pageCount,
            isbn13: industryIdentifiers[0].identifier,
            image: imageLinks.thumbnail
        }
        postBook(body)

    };

    async function postBook(body) {
        const res = await fetch("http://localhost:5000/books", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const item = await res.json();
        console.log(item)
    }



    function renderBooks(arr) {


        return arr.map(book => {
            return (
                <div>
                    <p>{book.title}</p>
                    {book.authors && <p><small>{book.authors.join(", ")}</small></p>}
                    {book.imageLinks && book.imageLinks.thumbnail && <img src={book.imageLinks.thumbnail} alt={book.title} />}

                    <button onClick={() => addToDatabase(book)}> Add this book to database</button>
                </div>
            )
        })
    }

    return (
        <div>
            <form onSubmit={searchBook}>
                <label>title</label>
                <input type="text" name="title" placeholder="title name" />
            </form>

            {renderBooks(books)}

        </div>
    )
}
