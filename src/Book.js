import React from "react";
import ChangeShelf from './ChangeShelf'

class Book extends React.Component {

  render() {
    const { book, moveBook} = this.props
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
              }}
            />
            <ChangeShelf book={book} moveBook={moveBook}/>
          </div>
          <div className="book-title">{book.title}</div>
        </div>
      </li>
    )
  }
}

export default Book
