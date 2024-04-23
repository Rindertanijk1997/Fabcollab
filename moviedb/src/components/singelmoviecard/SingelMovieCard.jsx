import './singelmoviecard.css';
import useStore from '../../store';
import banner from '../../assets/banner.png';
import heart from '../../assets/heart.png';


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
                <div className="card_right__logo">
                <ul className='ul-logo'>
                    <li className='li-logo'>
                    <img className='movie-logo' src={banner} onClick={() => addToWatchlist(movie)} alt="Banner" />
                    </li>
                    <li className='li-logo'>
                        <img className='movie-logo' src={heart} onClick={() => addToFavorites(movie)} alt="Heart" />
                    </li> 
                </ul>
                </div>
            </div>
        </div>

    );
}

export default SingelMovieCard;