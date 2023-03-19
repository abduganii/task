import React from 'react'
import Container from '../container/container'
import logo from '../../assets/images/logo1.svg'
import { Link } from 'react-router-dom'
import Framesa from '../../assets/images/Framesa.svg'

import './footer.scss'

export default function Footer() {
    return (
        <footer className='Footer'>
            <Container>
                <div>
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <h3 className='Footer-title'>Education</h3>
                    <p className='Footer-text'>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam the elementum. Urna, posuere nisi sit gravid.</p>
                </div>
                <div className='Footer-divlink'>
                    <Link className='Footer-link'>About Us</Link>
                    <Link className='Footer-link'>Graduation</Link>
                    <Link className='Footer-link'>Scholarship</Link>
                    <Link className='Footer-link'>Admissions</Link>
                    <Link className='Footer-link'>International</Link>
                    <Link className='Footer-link'>Events</Link>
                </div>
                <div className='Footer-divlink'>
                    <Link className='Footer-link'>Language</Link>
                    <Link className='Footer-link'>WordPress</Link>
                    <Link className='Footer-link'>Privacy</Link>
                    <Link className='Footer-link'>FAQs</Link>
                    <Link className='Footer-link'>Support</Link>
                </div>
                <div className='Footer-least'>
                    <p className='Footer-teltex'>Звонок по Узбекистану бесплатный</p>
                    <Link className='Footer-tel' to='tel:+99899999999'>+998 (99) 99-99-99</Link>
                    <button className='Footer-btn' >Перезвоните нам</button>
                    <div className='Footer-icons'>
                        <img src={Framesa} alt="" />
                        <img src={Framesa} alt="" />
                        <img src={Framesa} alt="" />
                        <img src={Framesa} alt="" />
                    </div>
                </div>
            </Container>
        </footer>
    )
}
