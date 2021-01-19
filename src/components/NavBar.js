import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav-div'>
            <header>
                <div className='name-title-wrapper'>
                    <NavLink to='/'><img src='https://nick-portfolio.s3-us-west-2.amazonaws.com/Name_Title.jpg' alt='Nick Almanza Filmmaker/Steadycam Operator'/></NavLink>
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
