import React from "react";
import OpenSearch from './OpenSearch'
import PropTypes from 'prop-types'
import ListBooksOnShelf from './ListBooksOnShelf'

class Shelves extends React.Component {

  render() {
    let wants = this.props.books.filter((book) => book.shelf === "wantToRead" )
    let currents = this.props.books.filter((book) => book.shelf === "currentlyReading" )
    let haveReads = this.props.books.filter((book) => book.shelf === "read" )

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Mis Libros</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ListBooksOnShelf
            title={"Want to Read"}
            filteredBooks={wants}
            moveBook={this.props.moveBook}/>

            <ListBooksOnShelf
            title={"Currently Reading"}
            filteredBooks={currents}
            moveBook={this.props.moveBook}/>

            <ListBooksOnShelf
            title={"Have Read"}
            filteredBooks={haveReads}
            moveBook={this.props.moveBook}/>
          </div>
        </div>
        <OpenSearch />
      </div>
    );
  }
}
export default Shelves;

Shelves.propTypes = {
  books: PropTypes.array.isRequired,
}
