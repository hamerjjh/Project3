import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      {/* <div>
        <Link to="/locations">Locations</Link>
      </div>
      <div>
        <Link to="/moves">Activities</Link>
      </div> */}
    </div>
  )
}

export default NavBar