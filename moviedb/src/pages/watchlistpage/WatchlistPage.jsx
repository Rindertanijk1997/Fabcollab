import Header from '../../components/header/Header'
import './watchlistpage.css'

function WatchlistPage() {
    return (
        <section className='watchlist-wrapper'>
            <article className='watchlist-title'>
                <h1>Watchlist</h1>
            </article>
            <article className='watchlist-container'>
                <article className='watchlist-box'></article>
                <article className='watchlist-box'></article>
                <article className='watchlist-box'></article>
                <article className='watchlist-box'></article>
                <article className='watchlist-box'></article>
                <article className='watchlist-box'></article>
                <article className='watchlist-box'></article>
                <article className='watchlist-box'></article>
            </article>
        </section>
    )
}

export default WatchlistPage
