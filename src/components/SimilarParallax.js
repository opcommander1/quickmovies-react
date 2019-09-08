import React, { Component } from 'react'
import M from 'materialize-css'

class Similarparallax extends Component {
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
          <img src="./img/ghostinashell.jpg" alt="" className="responsive-img"/>
        </div>
      </div>
    )
  }
}

export default Similarparallax