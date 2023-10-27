import React, { useEffect, useState } from "react"
import "./RowPost.css"
import axios from "../Constants/axios"
import { API_KEY, imageUrl } from "../Constants/constants"
import YouTube from "react-youtube"

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState("")

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data)
        setMovies(response.data.results)
      })
      .catch((Error) => {
        alert("Network error")
      })
  }, [])
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  }

  const handleMovieId = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
      if (response.data.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log(response.data.length, "Array empty")
      }
    })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleMovieId(movie.id)}
            className={props.isSmall ? "smallposter" : "poster"}
            src={`${imageUrl + movie.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
