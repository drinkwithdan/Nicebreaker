import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar" >

      <div className="navbar-left">
        
      </div>

      <div className="navbar-headings">
        <h1>Nicebreaker</h1>

        <h3>Search for a pre-workshop Icebreaker</h3>
      </div>

      <div className="navbar-disclaimer">

        <div>
          <p>Got a great icebreaker idea?</p>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc_4g72o2PeivpbSqMAAnHzCq5XxY3oBpRxQKwIe-FRHrJoow/viewform?usp=sf_link" target="_blank">
            <button>Submit it</button>
          </a>
        </div>

      </div>

    </div>
  )
}

export default Navbar
