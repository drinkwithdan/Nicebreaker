import { useState, useEffect } from "react"
import Card from "./Card"
import Cardlist from "./Cardlist"

const Home = ({ itemList }) => {
  const [ randomId, setRandomId ] = useState()

  useEffect(()=>{
    randomiseId()
  }, [])

  const randomiseId = () => {
    const randomisedId = Math.ceil(Math.random() * itemList.length)
    setRandomId(randomisedId)
  }

  const handleClick = (event) => {
    randomiseId()
  }

  const randomCard = itemList.find(({ id }) => id === randomId)

  return (
    <div className="home" >
      <div className="homepage-content">

        { randomId }

        <button onClick={handleClick} >Randomise</button>

        {randomId && <Card card={ randomCard } />}

      </div>
    </div>
  )
}

export default Home