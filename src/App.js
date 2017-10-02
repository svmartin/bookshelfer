import React from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import Shelves from './Shelves'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
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
