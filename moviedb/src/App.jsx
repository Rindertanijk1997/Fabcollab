
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleMoviePage from './pages/singlemoviepage/SingleMoviePage';
import SearchResultsPage from './pages/searchresultspage/SearchResultsPage';
import './index.css'
import './App.css'
import useStore from './store';
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import Footer from './components/footer/Footer'
import WatchlistPage from './pages/watchlistpage/WatchlistPage'

function App() {
  const fetchMovie = useStore(state => state.fetchMovie)

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage onMovieClick={fetchMovie} />} />
          <Route path="/single-movie-page/:imdbId" element={<SingleMoviePage onMovieClick={fetchMovie} />} />
          <Route path="/search-results" element={<SearchResultsPage onMovieClick={fetchMovie} />} />
          <Route path="/watchlist-page" element={<WatchlistPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;