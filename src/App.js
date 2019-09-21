import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import About from './components/layout/About'
import Search from './components/Search'
import MovieInfo from './components/MovieInfo'
import Credit from './components/layout/Credits'
import MovieParallax from './components/MovieParallax'
import SimilarMovies from './components/SimilarMovies'
import SimilarParallax from './components/SimilarParallax'
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
      M.Slider.init(elems, {'height' : 600});
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
  }

  handleClearMovieInfo = () => {
   this.setState({
    
    // movieinforesult: [],
    genres: [],
    credits: [],
    similarmovies: [],
    backdropimg: "",
    similarbdimg: ""
   })
  }

  handleClearSearch = () => {
    this.setState({
      searchresults: []
    })
  }

  getMovieResults = async (input) => {
    try {
      const res = await axios(`${config.proxy}https://api.themoviedb.org/3/search/movie?api_key=${config.key}&query=${input}`);
          this.setState({
            searchresults: res.data.results.slice(0, 10),    
          })
          // console.log(this.state.searchresults)
    } catch (error) {
      alert(error);
    }
  }

  // getGenres = async (genre_id) => {
  //   const res = await axios(`${config.proxy}https://api.themoviedb.org/3/genre/movie/list?api_key=${config.key}&query=${genre_id}`);
  //   this.setState({
  //     genres: res.data.genres.name
  //   })
  //   console.log(res)
  // }

  getMovieInfo = async (id) => {
    this.handleClearMovieInfo()
      const movieresult = this.state.searchresults.filter(result => {
        return result.id === id
      });
      this.setState({
        movieinforesult: movieresult,
        backdropimg: movieresult[0].backdrop_path
      })

      try {
        const res = await axios(`${config.proxy}https://api.themoviedb.org/3/movie/${id}?api_key=${config.key}&append_to_response=similar,credits`)
        // console.log(res.data.similar.results[0].backdrop_path)
        // let similarimg = []
        // for(let i = 0; i < res.data.similar.results.length; i++){
        //   similarimg.push(res.data.similar.results[i].backdrop_path)
        // }
        // console.log(similarimg)
        this.setState({
          genres: res.data.genres,
          credits: res.data.credits.cast.slice(0,3),
          similarmovies: res.data.similar.results,
          similarbdimg: res.data.similar.results[0].backdrop_path
        })
      } catch (error) {
        console.log(error)
      }
      // this.state.movieinforesult.push(movieresult)
      // console.log(this.state.credits)
      // console.log(this.state.movieinforesult, this.state.backdropimg)
      // console.log(this.state.searchresults)
      console.log(this.state.similarmovies)
  }

  

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <About />
          <Search getMovieResults={this.getMovieResults} searchresults={this.state.searchresults} getMovieInfo={this.getMovieInfo} handleClearSearch={this.handleClearSearch}/>
          <MovieInfo movieInfo={this.state.movieinforesult} genres={this.state.genres} credits={this.state.credits}/>
          <Credit credits={this.state.credits}/>
          <MovieParallax backdropimg={this.state.backdropimg}/>
          <SimilarMovies similarmovies={this.state.similarmovies}/>
          <SimilarParallax similarbdimg={this.state.similarbdimg} clearTimer={this.clearTimer}/>
          <Footer />
          <Switch>

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

