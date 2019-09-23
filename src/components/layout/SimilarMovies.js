import React from 'react'

const SimilarMovies = ({similarmovies}) => {

    return (
      <section id="similar-movies" className="container scrollspy">
          <div className="title-section">
            <div className="row col s12 l12 center">
            <h3>SIMILAR MOVIES</h3>
            </div>
          </div>
          <div className="row center">
          {/* Gets the Similar Movie Info result from array and list them within the interface */}
          {similarmovies.map((similarMovie) => (
            <div className="col s12 l6" key={similarMovie.id}>
              <div className="image">
                {similarMovie.poster_path ? 
                <img src={"https://image.tmdb.org/t/p/w500" + similarMovie.poster_path} alt="" className="img-style z-depth-2"/>
                :
                <img src="./img/title.jpg" alt="" className="img-style z-depth-2"/>
                }
              </div>
              <div className="content">
                <div className="title-suggest">
                  <h6>{similarMovie.title}</h6>
                </div>
                <div className="year-release-suggest">
                  <h6>{similarMovie.release_date}</h6>
                </div>
                <div className="rating">
                  <h6>{similarMovie.vote_average + " Stars"}</h6>
                </div>
                <br></br>
              </div>
            </div>
          ))}
          </div>
      </section>
    )
  
}

export default SimilarMovies
