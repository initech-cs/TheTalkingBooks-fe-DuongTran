import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import AuthService from "./services/AuthService";

import {
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  DropdownButton,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import About from "./pages/About";
import AddBook from "./pages/AddBook";
import SignUp from "./pages/SignUp";
import BookList from "./components/BookList";
import Details from "./pages/Details";

import Login from "./pages/Login";

import Spinner from "react-bootstrap/Spinner";
const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  let [bookList, setBookList] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("name"));
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );

  let history = useHistory();
  const logout = () => {
    AuthService.logout();
    setLoggedIn(false);
    window.location.href = "/login";
  };

  const setLoginUser = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("name", user);
    setUsername(user);
    setLoggedIn(true);
  };

  useEffect(() => {
    console.log("this is the list");
    // getBookCollection();
  }, []);

  // if (bookList.length === 0) {
  //   return (
  //     <div>
  //       <span>Loading data...</span>
  //       <Spinner animation="border" />
  //     </div>
  //   );
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">The Talking Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="navi-item">
                <Link to="/about">About</Link>
              </div>
              <div className="navi-item">
                <Link to="/books/create">Create</Link>
              </div>
              {/* <NavDropdown title="Book Categories" id="basic-nav-dropdown">
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
              </NavDropdown> */}
            </Nav>

            <Nav.Link href="signup">Sign Up</Nav.Link>
            <Nav.Link href="login">Sign In</Nav.Link>

            {loggedIn ? (
              <DropdownButton title={username}>
                <Nav.Link onClick={() => logout()}>Sign Out</Nav.Link>
              </DropdownButton>
            ) : (
              <Nav.Link href="login"></Nav.Link>
            )}

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
            <div className="main-banner">
              <img
                src="https://images.pexels.com/photos/3767420/pexels-photo-3767420.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
              <h1 className="page-title text-on-image">
                Welcome to The Talking Books
              </h1>
            </div>
            <div>
              <BookList />
            </div>
          </Route>

          <Route exact path="/books/create" component={AddBook} />
          <Route
            exact
            path="/books/:id"
            render={(props) =>
              username ? (
                <Details {...props} />
              ) : (
                <Login {...props} setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} setLoginUser={setLoginUser} />}
          />
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          {/* <Route path="books/create">
              <AddBook></AddBook>
          </Route> */}
        </Switch>
        {/* <Login /> */}
        <div className="footer">
          <div className="footer-text text-center">Made by Duong Tran</div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
