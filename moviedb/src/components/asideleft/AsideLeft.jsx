import React, { useState, useEffect } from 'react';
import './asideleft.css';
import useStore from '../../store';
import axios from 'axios';

function AsideLeft() {
  const { setSearchResults } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      const apiKey = 'be1d2151';
      const randomMovies = [];

      for (let i = 0; i < 50; i++) { // Hämta max 6 filmer
        try {
          const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=random`);
          if (response.data.Search && response.data.Search.length > 0) {
            const randomIndex = Math.floor(Math.random() * response.data.Search.length);
            randomMovies.push(response.data.Search[randomIndex]);
          }
        } catch (error) {
          console.error('Error fetching random movie:', error);
        }
      }

      setSearchResults(randomMovies);
      setIsLoading(false);
    };

    fetchRandomMovies();
  }, [setSearchResults]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='aside-left__container'>
      <div className='aside-left__box'>
        {useStore.getState().searchResults.map((movie, index) => (
          <article key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <p>{movie.Title}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default AsideLeft;
