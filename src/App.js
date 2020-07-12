import React from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Card,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Audio Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Book Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div class="main-banner">
        <img
          src="https://images.pexels.com/photos/3767420/pexels-photo-3767420.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt=""
        />
        <h1 class="page-title">Welcome to audiobook</h1>
      </div>

      <div class="introduction">
        <h1 class="intro text-center">Why Audio Book?</h1>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <Card className="card-item">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/4554234/pexels-photo-4554234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
                <Card.Body>
                  <Card.Text>Carry a book might be inconvenient.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md-4">
              <Card className="card-item">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/3764022/pexels-photo-3764022.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                />
                <Card.Body>
                  <Card.Text>
                    You don’t have to read books or looking at the computer
                    screen when reading e-books.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md-4">
              <Card className="card-item">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/4386325/pexels-photo-4386325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
                <Card.Body>
                  <Card.Text>
                    We offer a reasonable price and you can find thousands of
                    book audio. Choose whatever you like!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div class="full-width-widget">
        <img
          src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt=""
        />
        <p class="page-title">Welcome to audiobook</p>
      </div>

      <div class="introduction">
        <h1 class="intro text-center">Why Audio Book?</h1>
        <p class="description-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus at pariatur ea quis, cumque, iste laboriosam ad,
          commodi nostrum iure quas voluptate quod dolorum expedita unde laborum
          magni eius exercitationem mollitia sunt? Est praesentium impedit
          delectus rem quo maiores corporis veniam nobis voluptas soluta. Et
          voluptatibus modi nam quos mollitia.
        </p>
      </div>
      <div class="footer">
        <div class="footer-text text-center">Made by Duong Tran</div>
      </div>
    </div>
  );
}

export default App;
