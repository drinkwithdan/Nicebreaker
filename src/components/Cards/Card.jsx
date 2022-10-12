import { Link } from "react-router-dom"

const Card = ({ card }) => {
  return (
    <div className="card">
      <Link style={{textDecoration: 'none', color: "black"}} to={`/${card.id}`}>
        <h3 className="card-title">{card.title}</h3>
        <div className="card-body">

          <p>{card.minPeople} - {card.maxPeople} participants.</p>
          <p>{card.online && "Online"}</p>
          <p>{card.inPerson && "Offline"}</p>
          <p>Preparation: {card.preparation}</p>

        </div>
      </Link>
    </div>
  )
}

export default Card
