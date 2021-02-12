import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

var styles = {
    bmBurgerButton: {
        zIndex: '25',
        position: 'fixed',
        width: '25px',
        height: '20px',
        right: '20px',
        top: '20px',
    },
    bmBurgerBars: {
        background: 'white',
    },
    bmBurgerBarsHover: {
        background: '#a90000',
    },
    // bmCrossButton: {
    //     height: '24px',
    //     width: '24px',
    // },
    // bmCross: {
    //     background: '#bdc3c7',
    // },
    bmMenuWrap: {
        zIndex: '25',
        position: 'fixed',
        width: '30%',
        height: '30%',
    },
    bmMenu: {
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '1em',
        fontSize: '1em',
    },
    // bmMorphShape: {
    //     fill: '#373a47',
    // },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
    },
    bmItem: {
        display: 'inline-block',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.0)',
    },
}

function NavBar() {
    const [mobile, setMobile] = useState()
    window.addEventListener('resize', () => setMobile(window.innerWidth))
    return (
        <div className="nav-div">
            <header>
                {mobile >= 480 ? (
                    <>
                        <div className="name-title-wrapper">
                            <NavLink to="/">
                                <img
                                    src="https://nick-portfolio.s3-us-west-2.amazonaws.com/Name_Title.jpg"
                                    alt="Logo for Nick Almanza Filmmaker/Steadycam Operator"
                                />
                            </NavLink>
                        </div>
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/videos">Videos</NavLink>
                            <NavLink to="/bts">BTS</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                    </>
                ) : (
                    <>
                        <div className="name-title-wrapper">
                            <NavLink to="/">
                                <img
                                    src="https://nick-portfolio.s3-us-west-2.amazonaws.com/Name_Title.jpg"
                                    alt="Logo for Nick Almanza Filmmaker/Steadycam Operator"
                                />
                            </NavLink>
                        </div>
                        <Menu right styles={styles}>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/videos">Videos</NavLink>
                            <NavLink to="/bts">BTS</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </Menu>
                    </>
                )}
            </header>
        </div>
    )
}

export default NavBar
