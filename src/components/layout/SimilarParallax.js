import React from 'react'


const Similarparallax = ({similarbdimg}) => {
  
    return (
      <div className="parallax-container">
        <div className="parallax">
          {similarbdimg ?
          <img src={"https://image.tmdb.org/t/p/w500" + similarbdimg}  alt="" className="responsive-img" id="img"/>
          :
          <img src="./img/movieplace.jpeg" alt="" className="responsive-img" id="img"/>
          }
        </div>
      </div>
    )
}

export default Similarparallax