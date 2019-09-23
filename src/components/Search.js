import React, { Component } from 'react'
import SearchResults from './layout/SearchResults'


class Search extends Component {
  state = {
    query: ''
  }

//Clear user input box   
handleClearInput = () => {
  document.querySelector('#search').value = '';
}

//Call clear input method clear input box.  Then set the state of user input
handleChange = (e) => {
  this.props.handleClearSearch()
  this.setState({
    query: e.target.value
  })
}

//Submit user movie input, prevent the submit from refreshing, 
//Pass user movie input to get movie result from api
//Then clear the input box after
handleSubmit = (e) => {
  e.preventDefault();
  this.props.getMovieResults(this.state.query);
  this.handleClearInput()
}

  render () {
    return (
    <section id="title-search" className="black scrollspy">
      <div className="row">
        <div className="col s12 l8 offset-l2">
          <div className="slider">
            <ul className="slides">
              <li>
                <img src="./img/titlenew.jpg" alt="MIAAG"/>
              </li>
              <li>
                <img src="./img/blackbg.jpg" alt="Black Background Color"/>
                <div className="caption center-align">
                  <h3>Top Rated Movies</h3>
                  <h5>The Godfather</h5>
                  <h5>Spider-Man Into The Spider-Verse</h5>
                  <h5>Schindler's List</h5>
                </div>
              </li>
              <li>
                <img src="./img/godfather2.jpeg" alt="The Godfather"/>
              </li>
              <li>
                <img src="./img/spiderman2.jpg" alt="Spider-Man"/>
              </li>
              <li>
                <img src="./img/schindlerslist4.jpg" alt="Schindler's List"/>
                <div className="caption center-align hide-on-med-and-up">
                  <h5>Schindler's List</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="nav-wrapper">
              <form onSubmit={this.handleSubmit}>
                <div className="input-field black z-depth-2">
                  <input type="search" id="search" onChange={this.handleChange} />
                  <label htmlFor="search" className="label-icon"><i className="material-icons red-text">search</i></label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <SearchResults sresults={this.props.searchresults} getMovieInfo={this.props.getMovieInfo} />
          </div>
        </div>
      </div>
  </section>
    )
  }
}


export default Search
