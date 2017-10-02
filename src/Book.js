import React from "react";

class Book extends React.Component {

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"></div>
          </div>
          <div className="book-title">Test Book Title</div>
        </div>
      </li>
    )
  }
}

export default Book
