import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import "./navbar.scss"

export default function Navbar() {


    return (
        <nav className='Navbar'>
            <NavLink className='Navbar-link' activeClassName to='/'>О НАС</NavLink>
            <NavLink className='Navbar-link' activeClassName to='/curs'>КУРСЫ</NavLink>
            <NavLink className='Navbar-link' activeClassName to='/news'>НОВОСТИ</NavLink>
            <NavLink className='Navbar-link' activeClassName to='/nastav'>НАСТАВНИКИ ✨</NavLink>
            <div className='Navbar-animation start-home'></div>
        </nav>
    )
}
