import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../Constants/axios';  
import { API_KEY,imageUrl } from '../Constants/constants';


const Banner =()=> {

  const [movie, setMovie] = useState()

  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      console.log(response.data.results[0]);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      )
    })
  },[])//empty dependency array for the useeffect should only work once after the component is mounted

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""} )`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner