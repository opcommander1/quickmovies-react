import React, { Component } from 'react'
import M from 'materialize-css'

class MovieInfo extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(elems, {});
    });
  }
  render () {
    return (
    <section id="movie-info" className="container">
      <div className="row">
        <div className="col s12 l4">
          <div className="backdrop-image">
            <img src="./img/TheMatrix.jpg" alt="" className="responsive-img materialboxed"/>
          </div>
        </div>
        <div className="col s12 l7 offset-l1">
          <div className="movie-details">
            <div className="title"><h3>The Matrix</h3></div>
            <div className="date-release">1999</div>
            <span className="Genres">Action, Science Fiction</span>
            <div className="summary">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam deleniti repudiandae debitis soluta corporis cupiditate consectetur aliquam velit praesentium molestiae odit, quae cumque culpa adipisci rem repellat similique commodi illo!</p>
            </div>
            <div className="rating"><h4>8.1 out of 10</h4></div>
          </div>
        </div>
      </div>
      <div className="row center">
        <div className="col s12 l4">
          <div className="image">
            <img src="./img/Neo.jpeg" alt="" className="img-style"/>
          </div>
          <div className="content">
            <div className="actor-name">
              <h6>Keanu Reeves</h6>
            </div>
            <div className="stage-name">
              <h6>Thomas A. Anderson/Neo</h6>
            </div>
          </div>
        </div>
        <div className="col s12 l4">
          <div className="image">
            <img src="./img/lawrence.jpeg" alt="" className="img-style"/>
          </div>
          <div className="content">
            <div className="actor-name">
              <h6>Laurence Fishburne</h6>
            </div>
            <div className="stage-name">
              <h6>Morpheus</h6>
            </div>
          </div>
        </div>
        <div className="col s12 l4">
          <div className="image">
            <img src="./img/trinty.jpeg" alt="" className="img-style"/>
          </div>
          <div className="content">
            <div className="actor-name">
              <h6>Carrie-Anne Moss</h6>
            </div>
            <div className="stage-name">
              <h6>Trinty</h6>
            </div>
          </div>
        </div>
      </div>
  </section>
    )
  }
}


export default MovieInfo
