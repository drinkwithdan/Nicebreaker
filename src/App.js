import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from "./components/Navbar"
import icebreakers from "./data/icebreakers-data"

function App() {
  return (
    <div className="App">
      <Navbar />
      {icebreakers && <Home itemList={icebreakers} />}
      <Footer />
    </div>
  );
}

export default App;

// "npm run deploy" to deploy to gh-pages
