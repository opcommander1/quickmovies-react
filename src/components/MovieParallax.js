import React, { Component } from 'react'
import M from 'materialize-css'

class Movieparallax extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      M.Parallax.init(elems, {});
    });
  }
  render() {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img src="./img/TheMatrix.jpg" alt="" className="responsive-img"/>
        </div>
      </div>
    )
  }
}

export default Movieparallax