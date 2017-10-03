import React from "react";
import OpenSearch from './OpenSearch'
import PropTypes from 'prop-types'
import ListBooksOnShelf from './ListBooksOnShelf'

class Shelves extends React.Component {


  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Mis Libros</h1>
        </div>
        <div className="list-books-content">
          <div>
          {/* not keen on filtering 3 times, but will try
            because I already have this.props.books available
          */}
            <ListBooksOnShelf
            title={"Want to Read"}
            section={"wantToRead"}
            books={this.props.books.filter((book) => {
              book.shelf === "wantToRead"
            })}/>

            <ListBooksOnShelf
            title={"Currently Reading"}
            section={"currentlyReading"}
            books={this.props.books.filter((book) => {
              book.shelf === "currentlyReading"
            })}/>

            <ListBooksOnShelf
            title={"Have Read"}
            section={"read"}
            books={this.props.books.filter((book) => {
              book.shelf === "read"
            })}/>
          </div>
        </div>
        <OpenSearch />
      </div>
    );
  }
}
export default Shelves;

Shelves.propTypes = {
  books: PropTypes.array.isRequired
}
