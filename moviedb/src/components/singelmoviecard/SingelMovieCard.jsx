import './singelmoviecard.css';


function SingelMovieCard({ movie }) {


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
                </div>
            </div>

    );
}

export default SingelMovieCard;