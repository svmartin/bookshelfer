import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class ListBooksOnShelf extends React.Component {

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.filteredBooks.map((book) => (
              // <Book key={book.id} book={book} />
              <Book book={book} key={book.id} moveBook={this.props.moveBook} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListBooksOnShelf

ListBooksOnShelf.propTypes = {
  filteredBooks: PropTypes.array.isRequired
}
