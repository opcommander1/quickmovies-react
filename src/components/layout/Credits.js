import React from 'react'

const Credits = ({credits}) => {
  return (

  <div className="row center container">
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
    {/* <div className="col s12 l4">
      <div className="image">
        <img src="./img/lawrence.jpeg" alt="" className="img-style"/>
      </div>
      <div className="content">
        <div className="actor-name">
          <h6>Laurence Fishburne</h6>
        </div>
        <div className="stage-name">
          <h6>Morpheus</h6>
        </div>
      </div>
    </div>
    <div className="col s12 l4">
      <div className="image">
        <img src="./img/trinty.jpeg" alt="" className="img-style"/>
      </div>
      <div className="content">
        <div className="actor-name">
          <h6>Carrie-Anne Moss</h6>
        </div>
        <div className="stage-name">
          <h6>Trinty</h6>
        </div>
      </div>
    </div> */}
  </div>
  )
}

export default Credits
