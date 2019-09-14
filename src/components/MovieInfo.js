import React from 'react'

const MovieInfo = ({movieInfo}) => {
console.log(movieInfo)
    return (
    <section id="movie-info" className="container">
    <div className="title-section">
          <div className="row col s12 l12 center">
           <h3>MOVIE INFORMATION</h3>
          </div>
        </div>
      <div className="row">
        <div className="col s12 l4">
          <div className="backdrop-image">
            <img src="./img/TheMatrix.jpg" alt="" className="responsive-img materialboxed"/>
          </div>
        </div>
        <div className="col s12 l7 offset-l1">
        {movieInfo.map((mInfo) => (
          <div className="movie-details" key={mInfo.id}>
            
            <div className="title"><h3>{mInfo.title}</h3></div>
            <div className="date-release">{mInfo.release_date}</div>
            <span className="Genres">Action, Science Fiction</span>
            <div className="summary">
              <p>{mInfo.overview}</p>
            </div>
            <div className="rating"><h4>{mInfo.vote_average + " out of 10"}</h4></div>
          </div>
          ))}
        </div>
      </div>
  </section>
    )
}


export default MovieInfo
