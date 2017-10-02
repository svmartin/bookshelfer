import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  render() {
    return(
      <div className="aa">
        <Route exact path="/" render={() =>
          <Shelves books={this.state.books} />}
        />
      </div>
    )
  }
}

export default BooksApp
