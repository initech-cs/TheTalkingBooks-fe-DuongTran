import React from "react";
import { Card } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <div class="introduction">
        <h1 class="intro text-center">Why Audio Book?</h1>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <Card className="card-about">
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
              <Card className="card-about">
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
              <Card className="card-about">
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
        <p class="text-on-image">Enjoy your time with The Talking Books</p>
      </div>

      <div class="introduction">
        <h1 class="intro text-center">How to become a member?</h1>
        <p class="description-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus at pariatur ea quis, cumque, iste laboriosam ad,
          commodi nostrum iure quas voluptate quod dolorum expedita unde laborum
          magni eius exercitationem mollitia sunt? Est praesentium impedit
          delectus rem quo maiores corporis veniam nobis voluptas soluta. Et
          voluptatibus modi nam quos mollitia.
        </p>
      </div>
    </div>
  );
}
