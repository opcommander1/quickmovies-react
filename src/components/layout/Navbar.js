import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
      <nav className="black">
        <img src="../../img/popcornnavtwo.jpg" alt=""/>
        <div className="container">
          <ul className="nav-mobile left hide-on-med-and-down">
            <li className="nav-style"><Link to='/'>Home</Link></li>
            <li className="nav-style"><a href="#search" id="nav-style">Search</a></li>
            <li className="nav-style"><a href="#movieinfo" >Movie Info</a></li>
            <li className="nav-style"><a href="#similarmovies">Similar Movies</a></li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
