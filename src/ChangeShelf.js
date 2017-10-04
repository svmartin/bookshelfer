import React from 'react'

class ChangeShelf extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { book } = this.props

    return(
      <div className="book-shelf-changer">
        <select
        value={book.shelf}
        onChange={(event) => (
          this.props.moveBook(book, event.target.value)
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
