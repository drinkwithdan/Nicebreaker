import Cardlist from "../Cards/Cardlist"
import Searchbar from "./Searchbar"

const Home = ({ currentList, handleFormSubmit, handleShowAllClick, handleRandomiseClick }) => {

  return (
    <div className="home" >

      <Searchbar 
        handleFormSubmit={handleFormSubmit}
        handleShowAllClick={handleShowAllClick}
        handleRandomiseClick={handleRandomiseClick}
      />
      {currentList ? <Cardlist currentList={currentList} /> : <h3 className="select-options-p">Select options from above.</h3>}

    </div>
  )
}

export default Home
