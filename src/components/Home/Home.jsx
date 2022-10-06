import { useState, useEffect } from "react"
import Card from "../Cards/Card"
import Cardlist from "../Cards/Cardlist"
import Searchbar from "./Searchbar"

const Home = ({ itemList }) => {
  const [ randomId, setRandomId ] = useState()
  const [currentList, setCurrentList] = useState()

  // // FOR RANDOMISING // //

  // useEffect(()=>{
  //   randomiseId()
  // }, [])

  // const randomiseId = () => {
  //   const randomisedId = Math.ceil(Math.random() * itemList.length)
  //   setRandomId(randomisedId)
  // }

  // const handleClick = (event) => {
  //   randomiseId()
  // }

  // const randomCard = itemList.find(({ id }) => id === randomId)

  // // // // // // // // // //

  if (!currentList) {
    setCurrentList(itemList)
  }

  const handleFormSubmit = (fields) => {
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
        && item.online === formFields.online 
        && item.inPerson === formFields.inPerson 
        && item.preparation === formFields.preparation
      ) {
        return true
      }
    })

    setCurrentList(newList)
  } 

  return (
    <div className="home" >
      <div className="homepage-content">
        <Searchbar handleFormSubmit={ handleFormSubmit } />
        <Cardlist itemList={currentList} />
      </div>
    </div>
  )
}

export default Home
