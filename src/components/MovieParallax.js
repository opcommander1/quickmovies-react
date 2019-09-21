import React from 'react'
// import M from 'materialize-css'

const Movieparallax = ({backdropimg}) => {
    return (
      <div className="parallax-container">
        <div className="parallax">
          {backdropimg ?
            <img src={"https://image.tmdb.org/t/p/w500" + backdropimg} alt="" className="responsive-img"/>
          : 
           <img src="./img/startingImage.jpg" alt="" className="responsive-img"/>
          } 
        </div>
      </div>
    )
}

export default Movieparallax