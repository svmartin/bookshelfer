import React from 'react'
import PropTypes from 'prop-types'

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"></h2>
        <ol className="bookshelf-books">
          <li>test book</li>
        </ol>
      </div>
    )
  }
}

export default Shelf
