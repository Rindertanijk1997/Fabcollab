import './singlemoviepage.css';
import React from 'react';
import useStore from '../../store';

function SingleMoviePage() {
  const movie = useStore(state => state.movie); //hämtar från store.js

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='singlepage-wrapper'>
      <h1 className='movie-info__title'>{movie ? movie.Title : 'Loading...'}</h1>
      <button className='back-btn'>Back</button>
      <img className='movie-img' src={movie.Poster} alt="Filmlogga" />
      <p className='movie-description'>{movie.Plot}</p>
      <p className='movie-plot'></p>
    </div>
  )
}

export default SingleMoviePage