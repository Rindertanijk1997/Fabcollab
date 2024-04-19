import React, { useState, useRef, useEffect } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';  
import useStore from '../../store';

function Header() {

    const { searchMovies, searchResults } = useStore(state => ({
        searchMovies: state.searchMovies,
        searchResults: state.searchResults,
        setMovie: state.setMovie
    }));

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
   


    const handleSelectMovie = (movie) => {
        setSearchTerm(movie.Title);
        
    };


    const handleSearch = () => {
        searchMovies(searchTerm); 
        
    };

    return (
        <header className='header'>
            <section className='header-title'>
            <Link to="/" className='header-title' ><h1>Fab Collab Movie Database</h1>
            <p>Movies for Everyone</p></Link>
            
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
                    if (e.target.value.length > 0) {
                        handleSearch();
                    } else {
                        setShowDropdown(false);
                    }
                }}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); // Förhindra att formuläret skickas om det är i ett formulär
                        navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
                    }
                }}
                
            />
            <button className='search-button' onClick={handleSearch}>Sök</button>
    
            </section>

            <section className='header-buttons'>
                <Link to="/watchlist-page" className='watchlist' >watchlist</Link>
                <Link to="/favorits-page" className='favorit' >favorit</Link>
                
            </section>
        </header>
    );
}

export default Header;
