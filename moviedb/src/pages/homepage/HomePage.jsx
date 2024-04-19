import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css';
import Modal from '../../components/modal/Modal';


function HomePage({ onMovieClick }) {
    const [movies, setMovies] = useState([]); 
    const [selectedMovie, setSelectedMovie] = useState(null); 

    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/movies_long.json')
          .then(response => {
            const moviesData = response.data;
            if (moviesData) {
                const randomMovies = moviesData.sort(() => Math.random() - 0.5).slice(0, 8);
                setMovies(randomMovies);
            }
        })
        .catch(error => console.log(error));
    }, []);

    const openModal = (movie) => {
        setSelectedMovie(movie);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

     return (
        <>
        <h1 className='homePage-heading'>Fab Collab Movie Tips</h1>
        <div className="homePage-container">
          {movies.map(movie => (
            <div className='homePage-card' key={movie.imdbid} onClick={() => onMovieClick(movie.imdbid)}>
              <img className='homePage-img' src={movie.poster} alt={`Poster of ${movie.title}`} />
              <h3 className='homePage-smallHeading'>{movie.title}</h3>
              <div className="homePage-modal">
                        <img className='homePage-logo' src="src/assets/banner.png" alt="" />
                        <button className='homePage-button' onClick={() => openModal(movie)}>Watch Trailer</button>
                        <img className='homePage-logo' src="src/assets/heart.png" alt="" />
                    </div>
                </div>
            ))}
            </div>
            <Modal movie={selectedMovie} isOpen={!!selectedMovie} closeModal={closeModal} />
        </>
    );
}

export default HomePage;