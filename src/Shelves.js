import React from "react";
import OpenSearch from './OpenSearch'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class Shelves extends React.Component {


  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Mis Libros</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf section={"Want to Read"} books={this.state}/>
            <Shelf section={"Currently Reading"} />
            <Shelf section={"Have Read"}/>
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
