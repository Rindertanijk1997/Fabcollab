import './index.css'
import './App.css'
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import Footer from './components/footer/Footer'
import WatchlistPage from './pages/watchlistpage/WatchlistPage'


function App() {

  return (
    <div className="app">    
      <Header/>
      <HomePage />
      <WatchlistPage /> 
      <Footer />
    </div>
  )
}

export default App
