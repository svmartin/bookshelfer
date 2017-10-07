import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
    }
  }

  updateQuery = (query) => {
    if (!query) {
      this.setState({
        query: '',
        results: []
      })
    } else {
        this.setState({ query: query })
        BooksAPI.search(query).then((books) => {
          if (books) {
            this.setState({ results: books })
          }
        }).catch(error => {
          console.log(error)
        })
      }
  }

  render() {
    let { results, query } = this.state
    let { books, moveBook } = this.props

    // -loop over books in bookshelf
    // -get index of itemBook in searchResults array
    // if the same id is in the bookshelf array, there is a match, so:
    // 1: filter and return all books except for book that is a match
    // 2: add book, which now has book.shelf to results
    // This should make sure that books that appear in search results
    // that are also in bookshelf have the correct shelf state

    books.forEach(book => {
    let matchFound = results.findIndex((item) => item.id === book.id);
      if(matchFound !== -1) { // if there is a match
          // keep all books in results that do NOT match
          results = results.filter(item => item.id !== book.id);
          // add matched book object to results
          results = [...results, book];
      }
    })

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
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          { results.length > 0 && (
            <ol className="books-grid">

              {/* map over search results here */}
              { results.map((book) => (
                <Book book={book} key={book.id} moveBook={moveBook}/>
              ))}

            </ol>
          )} {/*how to deal with no search results?*/}
          { results.length === 0 && (
            <h1>0 results</h1>
          )}
        </div>

      </div>
    )
  }
}

export default Search

Search.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
}
