import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="black">
        <img src="../../img/popcornnavtwo.jpg" alt=""/>
        <div className="container">
          <ul className="nav-mobile left hide-on-med-and-down">
            <li className="nav-style"><a className="modal-trigger" href="#about" data-target="about">About</a></li>
            <li className="nav-style"><a href="#title-search" id="nav-style">Search</a></li>
            <li className="nav-style"><a href="#movie-info" >Movie Info</a></li>
            <li className="nav-style"><a href="#similar-movies">Similar Movies</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
