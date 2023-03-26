import React from 'react';
import { Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <nav className='ui raised very padded segment'>
        <a className=" ui teal inverted segment" href="/">Gloriaa </a>
        <div className="ui right floated header">
          <button className= "ui button "><Link to="/Home">Home</Link></button>
          <button className= "ui button "><Link to="/About">About</Link></button>
          <button className= "ui button "><NavLink to="/Contact">Contact</NavLink></button>
        </div>
    </nav>
  )
}

export default NavBar;