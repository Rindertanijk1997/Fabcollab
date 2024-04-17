import './index.css'
import './App.css'
import Header from './components/header/Header'


import HomePage from './pages/homepage/HomePage'
import SingleMoviePage from './pages/singlemoviepage/SingleMoviePage'
import SearchResultsPage from './pages/searchresultspage/SearchResultsPage'


function App() {

  return (
    <div className="app">    
      <Header/>
      <HomePage />

      <SingleMoviePage />
      <SearchResultsPage />

      {/* <SingleMoviePage /> */}

    </div>
  )
}

export default App
