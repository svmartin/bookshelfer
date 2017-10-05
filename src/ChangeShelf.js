import React from 'react'

class ChangeShelf extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { book, moveBook } = this.props

    return(
      <div className="book-shelf-changer">
        <select
        value={book.shelf}
        onChange={(event) => (
          moveBook(book, event.target.value)
        )}
        >
          <option value="none" disabled>
            Move to...
                            </option>
          <option value="currentlyReading">
            Currently Reading
                            </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ChangeShelf
