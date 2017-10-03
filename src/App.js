import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import Shelves from './Shelves'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  // note to self: copy, modify, re-render DOM...do NOT try to modify
  // current state directly...copy, modify, re-render
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      book.shelf = shelf
      this.getAllBooks()
    })
  }

  render() {
    return(
      <div className="app">
        <Route exact path="/" render={() =>
          <Shelves books={this.state.books} />}
        />
        <Route exact path="/search" render={() =>
          <Search />}
        />
      </div>
    )
  }
}

export default BooksApp
