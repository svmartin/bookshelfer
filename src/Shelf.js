import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends React.Component {
  const shelves = ["wantToRead", "currentlyReading", "read"]
  
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.section}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf

Shelf.propTypes = {
  section: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}
