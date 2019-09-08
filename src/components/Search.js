import React, { Component } from 'react'
import M from 'materialize-css'

class Search extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      M.Carousel.init(elems, {});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.slider');
      M.Slider.init(elems, {});
    });
  

  }
  render () {
    const heightStyle = {
      height: '60px'
    }
    return (
    <section id="title-search" className="black">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="slider">
            <ul className="slides">
              <li>
                <img src="./img/title.jpg" alt="MIAAG"/>
              </li>
              <li>
                <img src="./img/blackbg.jpg" alt="Black Background Color"/>
                <div className="caption center-align">
                  <h3>Top Rated Movies</h3>
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
          {/* <div className="card z-depth-2">
            <div className="card-image">
              <img src="./img/title.jpg" alt="MIAAG"/>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="nav-wrapper">
              <form>
                <div className="input-field black z-depth-2">
                  <input type="search" id="search" require/>
                  <label htmlFor="search" className="label-icon"><i className="material-icons red-text">search</i></label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <ul style={heightStyle} className="collection z-depth-1">
              <li className="collection-item avatar">
                <img src="./img/startrek.jpg" alt="" className="circle"/>
                <span className="title center"><a href="#star">Star Trek Nemesis</a></span>
              </li>
            </ul>
            <ul style={heightStyle} className="collection z-depth-1">
              <li className="collection-item avatar">
                <img src="./img/startrek.jpg" alt="" className="circle"/>
                <span className="title center"><a href="#star">Star Trek Nemesis</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </section>
    )
  }
}


export default Search
