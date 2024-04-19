import './watchlistpage.css'

function WatchlistPage() {
  return (
<section className='watchlist-wrapper'>
            <article className='watchlist-title'>
                <h1>Watchlist</h1>
            </article>
            <article className='watchlist-container'>
                <article className='watchlist-box'>
                    <h2 className='watchlist-box__title'></h2>
                    <h3 className='watchlist-box__year'></h3>
                    <p className='watchlist-box__plot'></p>
                    <p className='watchlist-box__genre'></p>
                    <p className='watchlist-box__actors'></p>
                </article>
            </article>
        </section>
  )
}

export default WatchlistPage