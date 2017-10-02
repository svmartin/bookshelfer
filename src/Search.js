import React from 'react'
import * as BooksAPI from './BooksAPI'
// import ChangeShelf from './ChangeShelf'
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
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          { this.state.results.length > 0 && (
            <ol className="books-grid">

              {/* map over search results here */}
              {this.state.results.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                        }}
                      />
                      {/*change shelf here*/}
                    </div>
                    <div className="book-title">{book.title}</div>
                  </div>
                </li>
              ))}

            </ol>
          )} {/*how to deal with no search results?*/}
          { this.state.results.length === 0 && (
            <h1>0 results</h1>
          )}
        </div>

      </div>
    )
  }
}

export default Search
