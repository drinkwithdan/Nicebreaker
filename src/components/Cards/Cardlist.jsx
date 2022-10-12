import Card from "./Card"

const Cardlist = ({ currentList }) => {

  const fullList = currentList.map((item) => {
    return <Card key={item.id} card={item} />
  })

  return (
    <div className="cardlist">
      { fullList }
    </div>
  )
}

export default Cardlist
