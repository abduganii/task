import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import './mentors.scss'
import img1 from '../../assets/images/Rectangle393.png'
import img2 from '../../assets/images/Rectangle392.png'
import img3 from '../../assets/images/Rectangle394.png'
import img4 from '../../assets/images/Rectangle395.png'

const data = [
    {
        img: img1,
        name: 'Алина'
    },
    {
        img: img2,
        name: 'Мадина'
    },
    {
        img: img3,
        name: 'Арина'
    },
    {
        img: img4,
        name: 'Андрей'
    }
]


export default function Mentors() {


    return (
        <div className='Mentors'>
            <Container>
                <h2 className="Mentors-title">НАСТАВНИКИ</h2>
                <div className='Mentors-cart'>
                    <div className='Mentors-cart-div'>
                        <img className='' src={data[0].img} alt="" />
                        <h3 className='Mentors-name'>{data[0].name}</h3>
                    </div>
                    <div className='Mentors-center'>
                        <div className='Mentors-cart-div'>
                            <img className='' src={data[1].img} alt="" />
                            <h3 className='Mentors-name'>{data[1].name}</h3>
                        </div>
                        <div className='Mentors-cart-div'>
                            <img className='' src={data[2].img} alt="" />
                            <h3 className='Mentors-name'>{data[2].name}</h3>
                        </div>
                    </div>
                    <div className='Mentors-cart-div'>
                        <img className='' src={data[3].img} alt="" />
                        <h3 className='Mentors-name'>{data[3].name}</h3>
                    </div>
                </div>
            </Container>
        </div>
    )
}
