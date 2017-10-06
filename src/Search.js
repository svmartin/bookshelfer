import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import _ from 'lodash'

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
        })
      }
  }

  render() {
    let { results, query } = this.state
    let { book, books } = this.props

    /*  # using lodash to merge books on shelf with results...
        # books on shelf replace books in results, so that
        # shelf state is shown in results
    */

    let newResults = _.unionBy(books, results, 'id')
    console.log(newResults)

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
              { newResults.map((book) => (
                <Book book={book} key={book.id} moveBook={this.props.moveBook}/>
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
