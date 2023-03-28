import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './context'

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovies] = useState("")

  //Here we get api in console form thi get movie function//
  const getMovies = async(url) => {
    setIsLoading(true);
    try {
      const res  = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data);
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  //Here we did debouncing for the show after few seconds//
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 1000);
    //Here use show only once obej ect//
     return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">
          loading...
        </div>
      </div>
    );
  }
  return (


    <section className='movie-section'>
      <div className="movie-card">
        <figure>
        <img src={movie.Poster} alt='' />

        </figure>
        <div className="card-content">
        <p className='title'>{movie.Title}</p>
        <p className='card-text'>{movie.Released}</p>
        <p className='card-text'>{movie.Genre}</p>
        <p className='card-text'>{movie.imdbRating} /10</p>
        <p className='card-text'>{movie.Country}</p>
        <NavLink to="/" className=".back-btn">Go Back</NavLink>
        </div>
      </div>
    </section>


  )
}

export default SingleMovie
