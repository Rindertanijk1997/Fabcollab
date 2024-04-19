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
      <h1 className='movie-info__title'>{movie.Title}</h1>
      <img className='movie-img' src={movie.Poster} alt="Filmlogga" />
      <p className='movie-description'>{movie.Plot}</p>
    </div>
  );
}

export default SingleMoviePage;