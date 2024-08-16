import React, { useState } from "react";
import './MovieMain.css';
import { Link } from "react-router-dom";
import { assets, movie_list } from '../../assets/asset';

const MovieMain = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movie_list.filter(movie =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-main container">
      <div className="search-container d-flex flex-row justify-content-between">
        <img src={assets.netflix} alt="Netflix Logo" className="netflix-logo" />
        <Link to='/'><button className='sign-in'>Sign Out</button></Link> 
      </div>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> 
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movies-card">
              <img src={movie.image} alt={movie.name} className="movie-img" />
              <h2 className="movie-title">{movie.name}</h2>
              <p className="movie-overview">{movie.description}</p>
                <button className="btn movie-btn">Watch Movie</button>
            </div>
          ))
        ) : (
          <p className="no-movies-found">Movie not found</p>
        )}
      </div>
    </div>
  );
};

export default MovieMain;
