import React from 'react'
import M from 'materialize-css'

const Similarparallax = ({similarbdimg, clearTimer}) => {
  // console.log(similarbdimg)
//  let images = similarbdimg


  
 

//  similarbdimg.forEach((bdimg, i) => {
//     display(bdimg)
//     console.log(bdimg)
//  })

//  let loop = function(i) {
//   // let counter = 0
//   // counter = counter + i
//   console.log(images[i])
  
//   if(i < images.length){
//     setTimeout(function(){
//       i++;
//       // counter = 0 + i
//       // console.log(counter)
//       if(similarbdimg[i] === null){
//         document.getElementById("img").src =  "./img/startingImage.jpg"
//       } else {
//       document.getElementById("img").src =  "https://image.tmdb.org/t/p/w500" + `${similarbdimg[i]}`
//       }
//       loop(i)
//     }, 5000)
//   }
// }

//  loop(0)
//  console.log(counter)
 
 
  
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