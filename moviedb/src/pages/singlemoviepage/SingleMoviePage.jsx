import './singlemoviepage.css'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './singlemoviepage.css';
import useStore from '../../store';

function SingleMoviePage({ onMovieClick }) {
  const { imdbId } = useParams();
  const movie = useStore(state => state.movie);

  useEffect(() => {
    onMovieClick(imdbId);
  }, [imdbId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='singlepage-wrapper'>
      <div className="left-section">
      <h1 className='movie-info__title'>{movie.Title}</h1>
      <img className='movie-img' src={movie.Poster} alt="Filmlogga" />
      </div>
      <div className="right-section">
      <p className='movie-description'>Rating: {movie.imdbRating}</p> 
      <p className='movie-description'>Year: {movie.Year}</p> 
      <p className='movie-description'>Runtime: {movie.Runtime}</p>
      <p className='movie-description'>Director: {movie.Director}</p>  
      <p className='movie-description'>Released: {movie.Released}</p>   
      <p className='movie-description'>Genre: {movie.Genre}</p>
      <p className='movie-description'>Actors: {movie.Actors}</p>  
      <p className='movie-description'>Plot: {movie.Plot}</p>
      </div>
    </div>
  );
}

export default SingleMoviePage;