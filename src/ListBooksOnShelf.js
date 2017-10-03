import React from 'react'
// import Book from './Book'
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'

class ListBooksOnShelf extends React.Component {
  constructor(props) {
    super(props);
    let shelves = ["wantToRead", "currentlyReading", "read"]
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.section}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              // <Book key={book.id} book={book} />
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
                  <ChangeShelf />
                </div>
                <div className="book-title">{book.title}</div>
              </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListBooksOnShelf

ListBooksOnShelf.propTypes = {
  section: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}
