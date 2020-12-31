import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav-div'>
            <header>
                <h1>Nick Almanza</h1>
                <nav>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/videos'>Videos</NavLink>
                    <NavLink to='/me'>Me</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
