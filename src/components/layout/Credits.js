import React from 'react'

const Credits = () => {
  return (
    <div>
    <div className="row center">
        <div className="col s12 l4">
          <div className="image">
            <img src="./img/Neo.jpeg" alt="" className="img-style"/>
          </div>
          <div className="content">
            <div className="actor-name">
              <h6>Keanu Reeves</h6>
            </div>
            <div className="stage-name">
              <h6>Thomas A. Anderson/Neo</h6>
            </div>
          </div>
        </div>
        <div className="col s12 l4">
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
        </div>
      </div>
    </div>
  )
}

export default Credits
