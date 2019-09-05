import React, { Component } from 'react'
import M from 'materialize-css'

class Search extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      M.Carousel.init(elems, {});
    });

  }
  render () {
    const heightStyle = {
      height: '60px'
    }
    const titleBg = {
      background: 'url("/img/startrek.jpg")',
      'background-position': 'center',      
    } 
    return (
    <section style={titleBg} id="title-search">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card z-depth-2">
            <div className="card-image">
              <img src="./img/title.jpg" alt="MIAAG"/>
            </div>
          </div>
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
