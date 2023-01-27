import React from 'react'
import './nav.css'

import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <nav>
        <div className="brandName">
            <h2><NavLink to='/'>Sabira</NavLink></h2>
        </div>
        <div className="elements">
            <ul>
                
                <li><NavLink to='/all'>All users</NavLink></li>
                <li><NavLink to='/add'>Add user</NavLink></li>
            </ul>
        </div>
    </nav>
    </>
  )
}
