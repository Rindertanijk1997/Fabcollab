import './index.css'
import './App.css'
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import Footer from './components/footer/Footer'


function App() {

  return (
    <div className="app">    
      <Header/>
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
