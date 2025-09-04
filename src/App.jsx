
import './App.css'
import { Routes, Route } from 'react-router-dom'
import  { LandingPage }  from './pages/LandingPage';
// import AnalyzePage from './pages/AnalyzePage';
// import ResultsPage from './pages/ResultsPage';

function App() {


  return (
  
    <Routes>
    <Route path = "/" element = { <LandingPage />} />
    {/* <Route path = "/analyze" element = { <AnalyzePage />} />
    <Route path = "/results" element = { <ResultsPage />} /> */}
    </Routes>

  )
}

export default App
