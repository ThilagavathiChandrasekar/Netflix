import React from 'react';
import './Movie.css';

const Movie = () => {
  return (
    <div className="video-container">
      <video className="video-player" controls>
        <source src="https://www.instagram.com/p/BnmVwLPBMbl/?igsh=ZjhmN2JsYmYzeHQy" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Movie;
