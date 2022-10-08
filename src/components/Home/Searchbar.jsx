import { useState } from "react"

const Searchbar = ({ handleFormSubmit }) => {
  const [fields, setFields] = useState({
    participants: 2,
    inPerson: "Online",
    preparation: "None"
  })

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.id]: event.target.value
    })
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleFormSubmit(fields)
  }

  return (
    <div className="searchbar">
      <div className="search-form">
        <form onSubmit={ handleSubmit } >

          I want icebreaker activities for 

          <input type="number" value={fields.participants} onChange={handleChange} id="participants" min="2" max="100"  /> 

          participants 

          <select id="inPerson" value={ fields.inPerson } onChange={handleChange} >
            <option value="online">online</option>
            <option value="offline">in person</option>
            <option value="both">online and in person</option>
          </select>

          and I have 

          <select id="preparation" value={fields.preparation} onChange={handleChange} >
            <option value="None">no</option>
            <option value="Some">some</option>
            <option value="Lots">lots of</option>
          </select>

            time to prepare it.

          <br/>

          <button action="submit">Show me</button>
          
        </form>
      </div>
    </div>
  )
}

export default Searchbar
