import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Search from './components/Search'
import MovieInfo from './components/MovieInfo'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Search />
          <MovieInfo />
          <Switch>

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

