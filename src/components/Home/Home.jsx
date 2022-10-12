import { useState, useEffect } from "react"
import Card from "../Cards/Card"
import Cardlist from "../Cards/Cardlist"
import Searchbar from "./Searchbar"

const Home = ({ currentList, handleFormSubmit, handleShowAllClick, handleRandomiseClick }) => {
  const [randomId, setRandomId] = useState()

  return (
    <div className="home" >

      <Searchbar 
        handleFormSubmit={handleFormSubmit}
        handleShowAllClick={handleShowAllClick}
        handleRandomiseClick={handleRandomiseClick}
      />
      {currentList.length ? <Cardlist currentList={currentList} /> : <h3 className="select-options-p">Select options from above.</h3>}

    </div>
  )
}

export default Home
