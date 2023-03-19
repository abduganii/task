import React from 'react'
import './aboutUs.scss'
import Container from '../container/container';
import img from "../../assets/images/Man.png"
import img2 from "../../assets/images/ОНАС.svg"

export default function AboutUs() {
    return (
        <div className='AboutUs'>
            <Container>
                <div className='AboutUs-left'>
                    <h2 className='AboutUs-title'>О НАС</h2>
                    <p className='AboutUs-text'>Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra pellentesque volutpat et vitae. Consequat felis ut in pellentesque feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo lobortis dolor volutpat enim. Tempor interdum aliquet at lorem nisi. Amet nec vel donec aliquet rhoncus faucibus. Bibendum dictumst ullamcorper nulla.</p>
                </div>
                <img src={img} alt="man" width={731} />
                <div className='AboutUs-imgpa'>
                    <img src={img2} alt="" />
                </div>
            </Container>
            <div className='AboutUs-color'></div>
        </div>
    )
}
