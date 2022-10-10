import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar"
import icebreakers from "./data/icebreakers-data"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route path="/home" element={icebreakers && <Home itemList={icebreakers} />} />

        <Route path="/*" element={<Navigate to="/home" />} />

      </Routes>
      <Footer />
    </div>


  );
}

export default App;

// "npm run deploy" to deploy to gh-pages
