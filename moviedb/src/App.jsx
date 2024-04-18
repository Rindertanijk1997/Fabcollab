import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import SingleMoviePage from './pages/singlemoviepage/SingleMoviePage';
import SearchResultsPage from './pages/searchresultspage/SearchResultsPage';
import Header from './components/header/Header';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/single-movie" element={<SingleMoviePage />} />
                    <Route path="/search-results" element={<SearchResultsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;