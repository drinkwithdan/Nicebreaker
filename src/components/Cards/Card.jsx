const Card = ({ card }) => {
  return (
    <div className="card">
      <h3 className="card-title">{card.title}</h3>
      <div className="card-body">
        <ul>
          <li>{ card.minPeople } - { card.maxPeople } participants. </li>
          <li>Preparation: { card.preparation }</li>
          <li>{ card.instructions }</li>
        </ul>
      </div>
    </div>
  )
}

export default Card
