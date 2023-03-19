import React from 'react'

import './news.scss'
import img from '../../assets/images/Rectangle398.png'
import img2 from '../../assets/images/Rectangle399.png'
import Container from '../container/container'
export default function News() {
    return (
        <div className='News'>
            <Container>
                <div className='News-left'>
                    <h3 className='News-title'> НОВОСТИ</h3>
                    <img className='News-img' src={img} alt="" />
                    <img className='News-img2' src={img2} alt="" />
                </div>
                <p className='News-text'>
                    Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra pellentesque volutpat et vitae. Consequat felis ut in pellentesque feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo lobortis dolor volutpat enim. Tempor interdum aliquet at lorem nisi. Amet nec vel donec aliquet rhoncus faucibus. Bibendum dictumst ullamcorper nulla.
                </p>
            </Container>
        </div>
    )
}
