import React from 'react'


const MovieInfo = ({movieInfo, genres}) => {
  
    return (
    <section id="movie-info" className="container scrollspy">
      <div className="title-section">
        <div className="row col s12 l12 center">
          <h3>MOVIE INFORMATION</h3>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4 materialboxed">
        {/* Gets the Movie Info result from array and list them within the interface */}
        {movieInfo.map((mInfo) => (
          <div className="backdrop-image" key={mInfo.id}>
            {mInfo.poster_path ?
            <img src={"https://image.tmdb.org/t/p/w500" + mInfo.poster_path} alt="" className="responsive-img"/>
            :
            <img src="./img/title.jpg" alt="" className="responsive-img"/>
            }
          </div>
          ))}
        </div>
        <div className="col s12 l7 offset-l1">
        {movieInfo.map((mInfo) => (
          <div className="movie-details" key={mInfo.id}>
            <div className="title"><h3>{mInfo.title}</h3></div>
            {mInfo.release_date ?
            <div className="date-release">{mInfo.release_date.slice(0,4)}</div>
            :
            <div className="date-release">No Release Date</div>
            }
            {/* Gets the Genre Info result from array and list them within the interface */}
            {genres.map((genre) => (
            <span className="Genres" key={genre.id}>{genre.name + ", "}</span>
            ))}
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
