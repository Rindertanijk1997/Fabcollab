import './searchresultspage.css'
import { Link } from 'react-router-dom';
import useStore from '../../store';


function SearchResultsPage() {
    const searchResults = useStore(state => state.searchResults); // Hämtar sökresultaten från store.js

    if (!searchResults) {
        return <div>Loading...</div>;
    } else if (searchResults.length === 0) {
        return <div>No results found</div>;
    }


    return (
        <div className="search-results">
            <h2>Search Results for</h2>
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
        </div>
    );
}

export default SearchResultsPage;


