import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.section}</h2>
        <ol className="bookshelf-books">
          <Book />
        </ol>
      </div>
    )
  }
}

export default Shelf

Shelf.propTypes = {
  section: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}