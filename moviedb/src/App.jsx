
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleMoviePage from './pages/singlemoviepage/SingleMoviePage';
import SearchResultsPage from './pages/searchresultspage/SearchResultsPage';
import './index.css'
import './App.css'
import axios from 'axios'
import useStore from './store';
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import Footer from './components/footer/Footer'
import WatchlistPage from './pages/watchlistpage/WatchlistPage'

function App() {
  const setMovie = useStore(state => state.setMovie);

  const fetchMovie = (movieId) => {
    axios.get(`http://www.omdbapi.com/?apikey=be1d2151&i=${movieId}`)
      .then(response => {
        setMovie(response.data); // Uppdaterar store.js med filmer
      })
      .catch(error => console.log('Error:', error));
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage onMovieClick={fetchMovie} />} />
          <Route path="/SingleMoviePage" element={<SingleMoviePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/watchlist-page" element={<WatchlistPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;