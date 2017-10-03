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
            <ListBooksOnShelf
            title={"Want to Read"}
            section={"wantToRead"} books={this.props.books}/>
            <ListBooksOnShelf
            title={"Currently Reading"}
            section={"currentlyReading"} books={this.props.books}/>
            <ListBooksOnShelf
            title={"Have Read"}
            section={"read"}
            books={this.props.books}/>
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
