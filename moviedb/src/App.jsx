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
    <div className="app">    
      <Header/>
      <HomePage onMovieClick={fetchMovie} />
      <SingleMoviePage />
      <HomePage />
      <WatchlistPage /> 
      <Footer />
    </div>
  )
}

export default App
