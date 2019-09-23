import React from 'react'

const Credits = ({credits}) => {

  return (
  <div className="row center container">
  {/* Gets the Credit Info result from array and list them within the interface */}
  {credits.map((credit) => (
    <div className="col s12 l4" key={credit.id}>
      <div className="image">
        {credit.profile_path ?
        <img src={"https://image.tmdb.org/t/p/w500" + credit.profile_path} alt="" className="img-style"/>
        :
        <img src="./img/title.jpg" alt="" className="img-style"/>
        }
      </div>
      <div className="content">
        <div className="actor-name">
          <h6>{credit.name}</h6>
        </div>
        <div className="stage-name">
          <h6>{credit.character}</h6>
        </div>
      </div>
    </div>
    ))}
  </div>
  )
}

export default Credits
