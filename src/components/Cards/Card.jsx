const Card = ({ card }) => {
  return (
    <div className="card">
      <h3 className="card-title">{card.title}</h3>
      <div className="card-body">
          <p>{ card.minPeople } - { card.maxPeople } participants.</p>
          <p>{ card.online && "Online" }</p>
          <p>{ card.inPerson && "Offline" }</p>
          <p>Preparation: { card.preparation }</p>
          <p>Instructions: { card.instructions }</p>
      </div>
    </div>
  )
}

export default Card
