import React from 'react'
import BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
    }
  }

  updateQuery = (query) => {
    this.setState(
      { query: query }
    )

    if (query) {
      BooksAPI.search(query).then((books) => {
        if (!books.error) {
          this.setState({ results: books })
        } else {
          this.setState({ resulsts: []})
          console.log(books.error)
        }
      })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
            type="text"
            placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">

            </ol>
        </div>
      </div>
    )
  }
}

export default Search
