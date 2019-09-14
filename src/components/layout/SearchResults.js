import React from 'react'

const SearchResults = ({sresults, getMovieInfo}) => {
  const heightStyle = {
    height: '60px'
  }
  return (
    <div>
      {sresults.map((result) => (
        <ul style={heightStyle} className="collection z-depth-1" key={result.id}>
        <li className="collection-item avatar">
          <img src={"https://image.tmdb.org/t/p/w500" + result.poster_path} alt="" className="circle"/>
          <span className="title center pointer" onClick={() => {getMovieInfo(result.id)}}>{result.title}</span>
        </li>
      </ul>
      ))} 
    </div>
  )
}

export default SearchResults
