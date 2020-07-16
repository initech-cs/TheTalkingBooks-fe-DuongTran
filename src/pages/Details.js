import React from "react";
import "./Details.css";

export default function Details(props) {
  console.log(props);
  // if (props.data == null) {
  //   return <div>no data...</div>;
  // }
  //
  return (
    <div class="detail-page">
      {/* <h3>Details about the book:</h3> */}
      <div class="container-fluid grey-background">
        <div class="container">
          <div class="row ">
            <div class="detail-part">
              <div class="col-md-3">
                <img src={props.location.image} alt="no image" />
              </div>
              <div class="col-md-9">
                <div class="detail-of-a-book">
                  <h4>{props.location.title}</h4>

                  {/* <div><ul>
                    {props.location.authors.map(item => {
                      return (<li>{item}</li>)
                    })}
                  </ul></div> */}
                  <p>{props.location.authors}</p>

                  <p>Page Count: {props.location.pageCount}</p>
                  <p>Rating: {props.location.averageRating}</p>
                  <p>Published Date: {props.location.publishedDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="book-description">
              <div>Description: {props.location.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
