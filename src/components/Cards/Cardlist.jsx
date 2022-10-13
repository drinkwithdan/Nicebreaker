import Card from "./Card"

const Cardlist = ({ currentList }) => {

  const fullList = currentList.map((item) => {
    return <Card key={item.id} card={item} />
  })

  return (
    <div className="cardlist">
      { fullList.length ? fullList : <h2>There are no results</h2>}
    </div>
  )
}

export default Cardlist
