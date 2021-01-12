import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav-div'>
            <header>
                <div className='name-title-wrapper'>
                    <h1>Nick Almanza</h1>
                    <h2>filmmaker / steadycam operator</h2>
                </div>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/videos'>Videos</NavLink>
                    <NavLink to='/bts'>BTS</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
