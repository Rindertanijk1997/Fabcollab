import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './searchresultspage.css';  

function SearchResultsPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { query } = useParams();

    useEffect(() => {
        const apiKey = 'be1d2151';
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

        axios.get(url)
            .then(response => {
                if (response.data.Search) {
                    setSearchResults(response.data.Search);
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    }, [query]);

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>

            {searchResults.length > 0 ? (
                <div className="movie-list">
                    {searchResults.map(movie => (
                        <div key={movie.imdbID} className="movie-card">
                            <Link to={`/movie/${movie.imdbID}`} className="movie-link">
                                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                                <h3 className="movie-title">{movie.Title}</h3>
                                <p className="movie-year">{movie.Year}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No results found for "{query}"</div>
            )}
        </div>
    );
}

export default SearchResultsPage;

