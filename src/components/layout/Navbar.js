import React from 'react'


const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="black">
        <img src="../../img/popcornnav.jpg" alt="" className="bowl-img left hide-on-med-and-down responsive-img"/>
         <a href="#empty" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <img src="../../img/popcornnavtwo.jpg" alt="" className="responsive-img"/>
        <div className="container">
          <ul className="nav-mobile left hide-on-med-and-down">
            <li className="nav-style"><a className="modal-trigger" href="#about" data-target="about">About</a></li>
            <li className="nav-style"><a href="#title-search" id="nav-style">Search</a></li>
            <li className="nav-style"><a href="#movie-info" >Movie Info</a></li>
            <li className="nav-style"><a href="#similar-movies">Similar Movies</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Responsive */}
      <ul className="sidenav" id="mobile-nav">
        <li><a className="modal-trigger sidenav-close" href="#about" data-target="about" >About</a></li>
        <li><a href="#title-search" id="nav-style" className="sidenav-close">Search</a></li>
        <li><a href="#movie-info" className="sidenav-close">Movie Info</a></li>
        <li><a href="#similar-movies" className="sidenav-close">Similar Movies</a></li>
      </ul>
    </div>
  )
}

export default Navbar
