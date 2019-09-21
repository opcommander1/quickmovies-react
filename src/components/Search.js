import React, { Component } from 'react'
import M from 'materialize-css'
import SearchResults from './layout/SearchResults'
// import axios from 'axios'

class Search extends Component {
  state = {
    query: ''
  }
 
handleClearInput = () => {
  document.querySelector('#search').value = '';
}

handleChange = (e) => {
  this.props.handleClearSearch()
  this.setState({
    query: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.getMovieResults(this.state.query);
  this.handleClearInput()
}

// getMovieresults = async () => {
//   try {
//     const res = await axios(`${config.proxy}https://api.themoviedb.org/3/search/movie?api_key=${config.key}&query=${this.state.query}`);
//         this.setState({
//           results: res.data.results     
//         })
//         console.log(this.state.results)
//   } catch (error) {
//     alert(error);
//   }
// }


  render () {
    // let searchList = null
    // const { searchResults } = this.props.searchresults
    // if(searchList) {
    //   searchList = searchResults.map(result => {
    //     return (
    //       <div className="row">
    //         <div className="col s12 m6 offset-m3">
    //           <ul style={heightStyle} className="collection z-depth-1" key={result.id}>
    //             <li className="collection-item avatar">
    //               <img src="./img/startrek.jpg" alt="" className="circle"/>
    //               <span className="title center"><a href={result.id}>Star Trek Nemesis</a></span>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     )
    //   })
    // } 
    return (
    <section id="title-search" className="black scrollspy">
      <div className="row">
        <div className="col s12 l8 offset-l2">
          <div className="slider">
            <ul className="slides">
              <li>
                <img src="./img/titlenew.jpg" alt="MIAAG"/>
                <div className="caption center-align">
                  <h3 className="black-text">Movie Information At A Glance</h3>
                </div>
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
                <img src="./img/schindlerslist2.jpg" alt="Schindler's List"/>
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
            {/* { searchList } */}
            {/* <ul style={heightStyle} className="collection z-depth-1">
              <li className="collection-item avatar">
                <img src="./img/startrek.jpg" alt="" className="circle"/>
                <span className="title center"><a href="#star">Star Trek Nemesis</a></span>
              </li>
            </ul> */}
            {/* <ul style={heightStyle} className="collection z-depth-1">
              <li className="collection-item avatar">
                <img src="./img/startrek.jpg" alt="" className="circle"/>
                <span className="title center"><a href="#star">Star Trek Nemesis</a></span>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
  </section>
    )
  }
}


export default Search
