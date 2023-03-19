import React from 'react'
import Container from '../container/container'
import "./header.scss"
import logo from '../../assets/images/logo.svg'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <Container>
                <Link to={'/'}><img src={logo} alt="logo" width={245} height={51} /></Link>
                <Navbar />
                <p className="header-language">RU</p>
                <Link className='header-cantact' to="tel:9876543210">КОНТАКТЫ</Link>
            </Container>
        </header>
    )
}
