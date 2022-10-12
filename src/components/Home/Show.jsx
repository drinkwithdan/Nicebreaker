import { useParams, Link } from "react-router-dom"

const Show = ({ icebreakersData }) => {
  const params = useParams()

  const currentItem = icebreakersData.find((item) => item.id == params.id)

  return (
    <div className="show">

      <Link to="/home">
        <button>{" < Back to Home"}</button>
      </Link>

      <div className="show-card">

        <h2 className="show-card-h2">{currentItem.title}</h2>

        <h3 className="show-card-h3">{currentItem.minPeople} - {currentItem.maxPeople} participants</h3>

        <h3 className="show-card-h3"> {
          ((currentItem.online && currentItem.inPerson) && "Online and in-person")
          || (currentItem.online && "Online")
          || (currentItem.inPerson && "In-person")
        }
        </h3>

        <p>{currentItem.instructions}</p>



      </div>
    </div>
  )
}

export default Show
