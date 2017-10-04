import React from 'react'
import * as BooksAPI from './BooksAPI'
// import BooksApp from './App'
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
