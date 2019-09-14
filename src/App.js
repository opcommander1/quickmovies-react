import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Search from './components/Search'
import MovieInfo from './components/MovieInfo'
import MovieParallax from './components/MovieParallax'
import SimilarMovies from './components/SimilarMovies'
import SimilarParallax from './components/SimilarParallax'
import Footer from './components/layout/Footer'
import config from './config'
import M from 'materialize-css'


class App extends Component {
  state = {
    searchresults: [],
    movieinforesult: []
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(elems, {});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      M.Parallax.init(elems, {});
    });
  }

  getMovieResults = async (input) => {
    try {
      const res = await axios(`${config.proxy}https://api.themoviedb.org/3/search/movie?api_key=${config.key}&query=${input}`);
          this.setState({
            searchresults: res.data.results.slice(0, 10)    
          })
          console.log(this.state.searchresults)
    } catch (error) {
      alert(error);
    }
  }

  getMovieInfo = (id) => {
      const movieresult = this.state.searchresults.filter(result => {
        return result.id === id
      });
      this.setState({
        movieinforesult: movieresult
      })
      // this.state.movieinforesult.push(movieresult)
      console.log(this.state.movieinforesult)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Search getMovieResults={this.getMovieResults} searchresults={this.state.searchresults} getMovieInfo={this.getMovieInfo} />
          <MovieInfo movieInfo={this.state.movieinforesult}/>
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

