import React, { useState, useEffect } from "react";
import './MovieMain.css';
import { Link } from "react-router-dom";
import {assets} from '../../assets/asset';
const MovieMain = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const fetchMovies = (searchQuery = "") => {
    const url = searchQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=f2c3310f158447748b6ab32c30eb5340&query=${searchQuery}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=f2c3310f158447748b6ab32c30eb5340`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        if (json.results && json.results.length > 0) {
          setMovieList(json.results);
          setError(false);
        } else {
          setMovieList([]);
          setError(true); // Set error state if no results are found
        }
      })
      .catch((error) => {
        console.error("Error fetching the movie data:", error);
        setError(true);
      });
  };

  useEffect(() => {
    fetchMovies(); // Fetch all movies initially
  }, []);

  useEffect(() => {
    if (query !== "") {
      fetchMovies(query); // Fetch movies based on search query
    } else {
      fetchMovies(); // Fetch all movies if query is empty
    }
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      fetchMovies(query);
    }
  };

  return (
    <div>
      <div className="search-name container">
        <img src={assets.netflix} alt="" className="netflix-logo" id=" netflix-logo" />
            <div className="search">
              <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={query}
                    className="search-input"
                    onChange={(e) => setQuery(e.target.value)}
                  />
              </form>
          </div>
      </div>
      {error ? (
        <p>Movie not found</p>
      ) : (
        <div className="movie-list">
          {movieList.map((movie) => (
            <div key={movie.id} className="movies-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-img"
              />
              
              <h2 className=" movie-title">{movie.title}</h2>
              <p className=" movie-overview">{movie.overview}</p>
               <Link to='/signup/plan/netflix-movie/movie'><button className="btn  movie-btn">Watch Movie</button></Link> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieMain;




// import React from 'react';
// import { food_list } from './path_to_your_file';

// const FoodListComponent = () => {
//     return (
//         <div>
//             {food_list.map((food) => (
//                 <div key={food._id}>
//                     <img src={food.image} alt={food.name} />
//                     <h3>{food.name}</h3>
//                     <p>{food.description}</p>
//                     <p>Price: ${food.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default FoodListComponent;
