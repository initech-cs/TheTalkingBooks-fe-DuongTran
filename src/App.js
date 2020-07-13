import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import About from "./pages/About";

import BookList from "./components/BookList";

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  let [bookList, setBookList] = useState([]);

  const getBookCollection = async () => {
    let url = `https://api.nytimes.com/svc/books/v3/lists.json?list=audio-fiction&api-key=Ao7znfFiNfgRKiKJBKBRB7GgeT7yoBAa`;
    let data = await fetch(url);
    let result = await data.json();
    setBookList(result.results);
    console.log(result);
  };

  useEffect(() => {
    console.log("this is the list");
    getBookCollection();
  }, []);

  if (bookList === null) {
    return (
      <div>
        <span>Loading data...</span> <Spinner animation="border" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Audio Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="navi-item">
                <Link to="/about">About</Link>
              </div>
              <NavDropdown title="Book Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Best-selling books
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Books of the month
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Editor's choice
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Exclusive
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link href="#home">Sign Up</Nav.Link>
            <Nav.Link href="#link">Sign In</Nav.Link>
            <Nav.Link href="#link">Sign Out</Nav.Link>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <div class="main-banner">
              <img
                src="https://images.pexels.com/photos/3767420/pexels-photo-3767420.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
              <h1 class="page-title text-on-image">Welcome to audiobook</h1>
            </div>
            <div>
              <BookList bookList={bookList} />
              {bookList.map((item) => {
                return item.book_details[0].title;
              })}
            </div>
          </Route>
        </Switch>

        <Route path="/about">
          <About></About>
        </Route>

        <div class="footer">
          <div class="footer-text text-center">Made by Duong Tran</div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
