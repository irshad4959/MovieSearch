import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';

const imgUrl = "https://via.placeholder.com/200/200";


const Movie = () =>{
  
  const {movie,isLoading}=useGlobalContext();

  if (isLoading) {
    return (
      <div className="">
        <div className="loading">
          loading...
        </div>
      </div>
    );
  }
 
  return (
   // here we start a movie card  for show the poster in searc box
    <section className="movie-page">
    <div className="container grid grid-4-col">
    {movie.map((curMovie)=>{
        const {imdbID,Title,Poster}= curMovie;   // movie information list show from here//
        const movieName = Title.substring(0,15)
      return(
        <NavLink to={`movie/${imdbID}`} key={imdbID}>    {/**this will show the  ID  of movies  */}
        <div className="card">
        <div className="card-info">
        <h2>{Title}</h2>
        <h2>{movieName.length >15 ? `${movieName}...`:movieName}</h2>
        <img src={Poster} alt={imdbID} />
        </div>
        </div>
        </NavLink>
      )
    })}
    
    </div>
    </section>
     )
}

export default Movie;
