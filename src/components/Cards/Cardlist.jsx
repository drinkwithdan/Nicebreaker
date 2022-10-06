import Card from "./Card"

const Cardlist = ({ itemList }) => {

  const fullList = itemList.map((item) => {
    return <Card key={item.id} card={item} />
  })

  return (
    <div className="cardlist">
      { fullList }
    </div>
  )
}

export default Cardlist
