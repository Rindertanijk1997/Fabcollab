import './watchlistpage.css'
import useStore from '../../store';

function WatchlistPage() {
    const watchlist = useStore(state => state.watchlist); // Hämta watchlist från store.js

    return (
        <section className='watchlist-wrapper'>
                <h1 className='watchlist-title'>Movies to watch</h1>
            <article className='watchlist-container'>
                {watchlist.map(movie => (
                    <article key={movie.imdbID} className='watchlist-box'>
                        <img src={movie.Poster} alt={movie.Title} className='watchlist-box__poster' />
                        <h2 className='watchlist-box__title'>{movie.Title}</h2>
                        <h3 className='watchlist-box__year'>{movie.Year}</h3>
                        {/* Add other movie details you want to display */}
                    </article>
                ))}
            </article>
        </section>
    )
}

export default WatchlistPage