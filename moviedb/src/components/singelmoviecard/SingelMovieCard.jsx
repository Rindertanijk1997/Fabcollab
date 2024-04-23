import './singelmoviecard.css';
import useStore from '../../store';


function SingelMovieCard({ movie }) {
    const addToWatchlist = useStore(state => state.addToWatchlist);
    const addToFavorites = useStore(state => state.addToFavoritelist);

    return (

        <div className="card">
            <div className="card_left">
                <img className='movie-img' src={movie.Poster} alt="Filmlogga" />
            </div>
            <div className="card_right">
                <h1 className='movie-info__title'>{movie.Title}</h1>
                <div className="card_right__details">
                    <ul>
                        <li>Year {movie.Year}</li>
                        <li>{movie.Runtime}</li>
                        <li>{movie.Genre}</li>
                    </ul>
                </div>
                <div className="card_right__plot">
                    <p className='movie-description'>{movie.Plot}</p>
                </div>
                <div className="card_right__details">
                <ul>
                    <li>
                        <img className='movie-logo' src="src/assets/banner.png" onClick={() => addToWatchlist(movie)} alt="" />
                    </li>
                    <li>
                        <img className='movie-logo' src="src/assets/heart.png" onClick={() => addToFavorites(movie)} alt="" />
                    </li> 
                </ul>
                </div>
            </div>
        </div>

    );
}

export default SingelMovieCard;