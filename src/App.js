import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Search from './components/Search'
import MovieInfo from './components/MovieInfo'
import MovieParallax from './components/MovieParallax'
import SimilarMovies from './components/SimilarMovies'
import SimilarParallax from './components/SimilarParallax'
import Footer from './components/layout/Footer'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Search />
          <MovieInfo />
          <MovieParallax />
          <SimilarMovies />
          <SimilarParallax />
          <Footer />
          <Switch>

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

