import './searchresultspage.css'
import { Link } from 'react-router-dom';
import useStore from '../../store';


function SearchResultsPage() {
    const searchResults = useStore(state => state.searchResults); // Hämtar sökresultaten från store.js
    const addToWatchlist = useStore(state => state.addToWatchlist);
    const addToFavorites = useStore(state => state.addToFavoritelist); // Ändra till addToFavoritelist

    if (!searchResults) {
        return <div>Loading...</div>;
    } else if (searchResults.length === 0) {
        return <div>No results found</div>;
    }


    return (
        <div className="search-results">
            <h2 className='searchlist__title'>Searchresults for</h2>
            <div className="movie-list">
                {searchResults.map(movie => (
                    <div key={movie.imdbID} className="movie-card">
                        <Link className="movie-link" to={`/single-movie-page/${movie.imdbID}`}>
                            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                            <h3 className="movie-title">{movie.Title}</h3>
                            <p className="movie-year">{movie.Year}</p>
                        </Link>
                        <article className='search-logo__container'>
                            <img className='searchPage-logo'  src="src/assets/banner.png" onClick={() => addToWatchlist(movie)} alt="" />
                            <img className='searchPage-logo'  src="src/assets/heart.png" onClick={() => addToFavorites(movie)} alt="" />
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResultsPage;