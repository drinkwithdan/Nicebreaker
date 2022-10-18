import { Link } from "react-router-dom"

const Card = ({ card }) => {
  return (
    <div className="card">
      <Link className="card-link" style={{ textDecoration: 'none', color: "black" }} to={`/Nicebreaker/show/${card.id}`}>
        <div className="card-title">
          <h3 className="card-title">{card.title}</h3>
        </div>

        <div className="card-prep">
          <p>Preparation: {card.preparation}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card
