import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import About from './components/layout/About'
import Search from './components/Search'
import MovieInfo from './components/layout/MovieInfo'
import Credit from './components/layout/Credits'
import MovieParallax from './components/layout/MovieParallax'
import SimilarMovies from './components/layout/SimilarMovies'
import SimilarParallax from './components/layout/SimilarParallax'
import Footer from './components/layout/Footer'
import config from './config'
import M from 'materialize-css'


class App extends Component {
  state = {
    searchresults: [],
    movieinforesult: [],
    genres: [],
    credits: [],
    similarmovies: [],
    backdropimg: "",
    similarbdimg: ""
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.slider');
      M.Slider.init(elems, {'height' : 500});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(elems, {});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      M.Parallax.init(elems, {});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      M.ScrollSpy.init(elems, {});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems, {});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, {});
    });
  }

  //Clears Movie Information 
  handleClearMovieInfo = () => {
   this.setState({
    genres: [],
    credits: [],
    similarmovies: [],
    backdropimg: "",
    similarbdimg: ""
   })
  }

  //Search Results
  handleClearSearch = () => {
    this.setState({
      searchresults: []
    })
  }

  //Gets user movie input from api, set state with top ten movie results
  getMovieResults = async (input) => {
    try {
      const res = await axios(`${config.proxy}https://api.themoviedb.org/3/search/movie?api_key=${config.key}&query=${input}`);
          this.setState({
            searchresults: res.data.results.slice(0, 10),    
          })
    } catch (error) {
      console.log(error)
    }
  }

  //Get user selection result, pass the movie id and find the single movie
  //set the state with the back drop img and movie information
  getMovieInfo = async (id) => {
    this.handleClearMovieInfo()
    try {
      const movieresult = this.state.searchresults.filter(result => {
        return result.id === id
      });
      this.setState({
        movieinforesult: movieresult,
        backdropimg: movieresult[0].backdrop_path
      })
    } catch (error) {
      console.log(error)
    }

    //Get the selection result, pass the id to get similar movie and credits
    //from the api. Then set the state 
    try {
      const res = await axios(`${config.proxy}https://api.themoviedb.org/3/movie/${id}?api_key=${config.key}&append_to_response=similar,credits`)
    
      this.setState({
        genres: res.data.genres,
        credits: res.data.credits.cast.slice(0,3),
        similarmovies: res.data.similar.results,
        similarbdimg: res.data.similar.results[0].backdrop_path
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (   
        <div>
          <Navbar />
          <About />
          <Search getMovieResults={this.getMovieResults} searchresults={this.state.searchresults} getMovieInfo={this.getMovieInfo} handleClearSearch={this.handleClearSearch} />
          <MovieInfo movieInfo={this.state.movieinforesult} genres={this.state.genres} />
          <Credit credits={this.state.credits} />
          <MovieParallax backdropimg={this.state.backdropimg} />
          <SimilarMovies similarmovies={this.state.similarmovies} />
          <SimilarParallax similarbdimg={this.state.similarbdimg} />
          <Footer />
        </div>
    )
  }
}

export default App

