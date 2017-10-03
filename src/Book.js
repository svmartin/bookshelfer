import React from "react";
import ChangeShelf from './ChangeShelf'

class Book extends React.Component {

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")"
            }}
          />
          <ChangeShelf />
        </div>
        <div className="book-title">{this.props.book.title}</div>
      </div>
      </li>
    )
  }
}

export default Book
