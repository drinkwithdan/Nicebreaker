import './App.css';
import { useState } from "react"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar";
import Show from "./components/Home/Show"
import icebreakersData from "./data/icebreakers-data"

function App() {
  const [currentList, setCurrentList] = useState()
  
  const navigate = useNavigate()

  // Function handles the Searchbar "Show Me" button and changes currentList to match criteria.
  // Param: {object} Search fields object from Searchbar
  // Returns: setCurrentList with inputted search terms
  const handleFormSubmit = (fields) => {

    // Compares prep times for 2 items and returns whether they can be prepared in time.
    // Param: itemPrep (string)
    // Param: formPrep (string)
    // Returns: (bool)
    const prepChecker = (itemPrep, formPrep) => {
      if (formPrep === "Lots") {
        if (itemPrep === "Lots" || itemPrep === "Some" || itemPrep === "None") {
          return true
        }
      }
      if (formPrep === "Some") {
        if (itemPrep === "Some" || itemPrep === "None") {
          return true
        }
      }
      if (formPrep === "None" && itemPrep === "None") {
        return true
      }
      else {
        return false
      }
    }

    // Spread variable from search fields.
    const formFields = { ...fields }

    // Sets boolean values "inPerson" and "online" to match search object.
    if (formFields.inPerson === "both") {
      formFields.inPerson = true
      formFields.online = true
    }
    if (formFields.inPerson === "online") {
      formFields.inPerson = false
      formFields.online = true
    }
    if (formFields.inPerson === "offline") {
      formFields.inPerson = true
      formFields.online = false
    }

    // New list filtered based on form fields
    const newList = icebreakersData.filter(item => {
      if (
        item.minPeople <= formFields.participants
        && item.maxPeople >= formFields.participants
        && ((item.online && formFields.online) || (item.inPerson && formFields.inPerson))
        && prepChecker(item.preparation, formFields.preparation)
      ) {
        return true
      }

    })

    // Sets currentList based on the above logic
    setCurrentList(newList)
  }

  // Handles Searchbar "Show all" button click.
  const handleShowAllClick = () => {
    setCurrentList(icebreakersData)
  }

  // Handle Searchbar "Random" button click.
  const handleRandomiseClick = () => {
    const randomId = Math.floor(Math.random() * (icebreakersData.length))
    navigate(`/Nicebreaker/show/${randomId}`)
  }


  return (
    <div className="App">
      <Navbar />
      <Routes>

        {/* Index route / */}
        <Route path="/Nicebreaker" element={<Home
            currentList={currentList}
            handleFormSubmit={handleFormSubmit}
            handleShowAllClick={handleShowAllClick}
            handleRandomiseClick={handleRandomiseClick}
          />}
        />

        {/* Show route /:id */}
        <Route path="/Nicebreaker/show/:id" element={icebreakersData && <Show icebreakersData={icebreakersData} />} />

        {/* Nicebreaker/* catch shared links
        <Route path="/Nicebreaker/*" element={<Navigate to="/Nicebreaker/home" />} /> */}

        {/* Catch all other routes and redirect to /Nicebreaker/home */}
        <Route path="/*" element={<Navigate to="/Nicebreaker" />} />

      </Routes>
      <Footer />
    </div>


  );
}

export default App;

// "npm run deploy" to deploy to gh-pages
