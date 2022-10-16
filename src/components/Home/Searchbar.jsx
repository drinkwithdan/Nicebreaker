import { useState } from "react"

const Searchbar = ({ handleFormSubmit, handleShowAllClick, handleRandomiseClick }) => {
  const [fields, setFields] = useState({
    participants: 2,
    inPerson: "Online",
    preparation: "None"
  })

  // Form control using {fields} state.
  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.id]: event.target.value
    })
  }

  // Handles form "Search" submit button.
  // Param: (event)
  // Returns: Sends {fields} object to App.js
  const handleSubmit = (event) => {
    event.preventDefault()
    handleFormSubmit(fields)
  }

  // Handles form "Show all" button click.
  const handleFormShowAllClick = () => {
    handleShowAllClick()
  }

  // Handle form "Random" button click.
  const handleFormRandomiseClick = () => {
    handleRandomiseClick()
  }

  return (
    <div className="searchbar">
      <div className="search-form">
        <form onSubmit={ handleSubmit } >

          I want icebreaker activities for &nbsp;

          <input type="number" value={fields.participants} onChange={handleChange} id="participants" min="2" max="100" /> 

          &nbsp; participants in an &nbsp;

          <select id="inPerson" value={ fields.inPerson } onChange={handleChange} >
            <option value="online">online</option>
            <option value="offline">in person</option>
            <option value="both">online and in person</option>
          </select>

          &nbsp; workshop and I have &nbsp;

          <select id="preparation" value={fields.preparation} onChange={handleChange} >
            <option value="None">no</option>
            <option value="Some">some</option>
            <option value="Lots">lots of</option>
          </select>

            &nbsp; time to prepare.

          <br/>

          <button className="search-button" action="submit">Search</button>
          
        </form>

        <button className="show-all-button" onClick={handleFormShowAllClick}>Show All</button>

        <button className="randomise-button" onClick={handleFormRandomiseClick}>Random</button>
      </div>
    </div>
  )
}

export default Searchbar
