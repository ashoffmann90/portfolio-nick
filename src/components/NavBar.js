import React from 'react'
import {NavLink} from 'react-router-dom'

import logo from '../assets/nick-bts-images/Name_Title.jpg'

function NavBar() {
    return (
        <div className='nav-div'>
            <header>
                <div className='name-title-wrapper'>
                    <img src={logo} alt='Nick Almanza Filmmaker/Steadycam Operator'/>
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
