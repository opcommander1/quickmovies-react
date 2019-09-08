import React, { Component } from 'react'
import M from 'materialize-css'

class SimilarMovies extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(elems, {});
    });
  }
  render() {
    return (
      <section id="similar-movie" className="container">
        <div className="title-section">
          <div className="row col s12 l12 center">
           <h3>SIMILAR MOVIES</h3>
          </div>
        </div>
        <div className="row center">
          <div className="col s12 l4">
            <div className="image">
              <img src="./img/ghostinashell.jpg" alt="" className="img-style z-depth-2"/>
            </div>
            <div className="content">
              <div className="title-suggest">
                <h6>Ghost In A Shell</h6>
              </div>
              <div className="year-release-suggest">
                <h6>2007</h6>
              </div>
              <div className="rating">
                <h6>6 Stars</h6>
              </div>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="image">
              <img src="./img/akira.jpg" alt="" className="img-style z-depth-2"/>
            </div>
            <div className="content">
              <div className="title-suggest">
                <h6>Akira</h6>
              </div>
              <div className="year-release-suggest">
                <h6>1988</h6>
              </div>
              <div className="rating">
                <h6>7.9 Stars</h6>
              </div>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="image">
              <img src="./img/bladerunner.jpg" alt="" className="img-style z-depth-2"/>
            </div>
            <div className="content">
              <div className="title-suggest">
                <h6>Blade Runner 2049</h6>
              </div>
              <div className="year-release-suggest">
                <h6>2017</h6>
              </div>
              <div className="rating">
                <h6>7.4 Stars</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SimilarMovies
