import { useState, useEffect } from "react"
import Card from "../Cards/Card"
import Cardlist from "../Cards/Cardlist"
import Searchbar from "./Searchbar"

const Home = ({ itemList }) => {
  const [ randomId, setRandomId ] = useState()
  const [currentList, setCurrentList] = useState()

  const handleFormSubmit = (fields) => {

    // Helper function to determine if preparation time is enough.
    // Returns true if form prep time is equal to or less than the item prep time.
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

    const formFields = {...fields}

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
    const newList = itemList.filter(item => {
      if (
        item.minPeople <= formFields.participants 
        && item.maxPeople >= formFields.participants 
        && ((item.online && formFields.online) || (item.inPerson && formFields.inPerson))
        && prepChecker(item.preparation, formFields.preparation)
      ) 
      {
        return true
      }

    })

    setCurrentList(newList)
  } 

  return (
    <div className="home" >
      <div className="homepage-content">
        <Searchbar handleFormSubmit={ handleFormSubmit } />
        { currentList ? <Cardlist itemList={currentList} /> : <p>Select options from above.</p> }
      </div>
    </div>
  )
}

export default Home
