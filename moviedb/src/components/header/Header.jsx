import React, { useState, useRef, useEffect } from 'react';
import './header.css';
import useStore from '../../store';

function Header() {

    const { searchMovies, searchResults } = useStore(state => ({
        searchMovies: state.searchMovies,
        searchResults: state.searchResults,
        setMovie: state.setMovie
    }));

    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelectMovie = (movie) => {
        setSearchTerm(movie.Title);
        setShowDropdown(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    const handleSearch = () => {
        searchMovies(searchTerm); 
        setShowDropdown(true); 
    };

    return (
        <header className='header'>
            <section className='header-title'>
                <h1>Fab Collab Movie Database</h1>
                <p>Movies for Everyone</p>
            </section>
            <section className='header-search'>
                <label htmlFor="searchInput" className='header-label'></label>
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Skriv här..."
                    value={searchTerm}
                    onChange={e => {
                        setSearchTerm(e.target.value);
                        setShowDropdown(false);
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <button className='search-button' onClick={handleSearch}>Sök</button>

                {/* Dropdown */}
                {showDropdown && (
                    <div ref={dropdownRef} className="search-dropdown">
                        {searchResults.slice(0, 8).map(movie => (
                            <div
                                key={movie.imdbID}
                                className="movie-card"
                                onClick={() => handleSelectMovie(movie)}
                            >
                                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                                <div className="movie-info">
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.Year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Overlay för att stänga dropdown */}
                {showDropdown && (
                    <div 
                        className="dropdown-overlay"
                        onClick={handleClickOutside}
                    ></div>
                )}
            </section>

            <section className='header-buttons'>
                <button className='watchlist'>WatchList</button>
                <button className='favorit'>Favorit</button>
            </section>
        </header>
    );
}

export default Header;