import React from 'react'
import Container from '../container/container'
import './Curs.scss'
import img1 from '../../assets/images/Rectangle389.png'
import img2 from '../../assets/images/Rectangle390.png'
import img3 from '../../assets/images/Rectangle391.png'
import arrow from '../../assets/images/arrow.svg'

const data = [{
    id: 1,
    img: img1,
    title: 'Lorem ipsum dolor sit amet',
    text: "Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
    data: '20 марта'
},
{
    id: 2,
    img: img2,
    title: 'Lorem ipsum dolor sit amet',
    text: "Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
    data: '20 марта'
},
{
    id: 3,
    img: img3,
    title: 'Lorem ipsum dolor sit amet',
    text: "Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu. ",
    data: '20 марта'
}
]

export default function Curs() {
    return (
        <div className='Curs'>
            <Container>
                <h1 className='Curs-title'>КУРСЫ</h1>
                <div className='Curs_cart'>
                    {data.map((e) => (
                        <div key={e.id} className='Curs_cart-box'>
                            <img src={e.img} alt="img" />
                            <div className='Curs_cart-top'>
                                <p className='Curs_cart-title'>{e.title}</p>
                                <p className='Curs_cart-data'>{e.data}</p>
                            </div>
                            <p className='Curs_cart-text'> {e.text} </p>
                            <div className='Curs_cart-btm'>
                                <img className='Curs_cart-btm-icon' src={arrow} alt="" />
                                <div className='Curs_cart-btm-div'></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='Curs-divbtn'><button className='Curs-btn'>ВСЕ КУРСЫ</button></div>
            </Container>
        </div>
    )
}
