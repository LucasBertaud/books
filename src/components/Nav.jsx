import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {

  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/add">Add</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav