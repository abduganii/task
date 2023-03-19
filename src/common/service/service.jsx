import React from 'react'
import Container from '../container/container'
import './service.scss'
import img from '../../assets/images/microscope.svg'
import hend from '../../assets/images/pngwing.svg'
export default function Service() {
    return (
        <div className='Service'>
            <Container>
                <div className='Service_card'>
                    <div className='Service_card-img'>
                        <img src={img} alt="" />
                    </div>
                    <p className='Service_card-text'>Lorem ipsum dolor
                        sit amet</p>
                </div>
                <div className='Service_card'>
                    <div className='Service_card-img'>
                        <img src={img} alt="" />
                    </div>
                    <p className='Service_card-text'>Lorem ipsum dolor
                        sit amet</p>
                </div>
                <div className='Service_card'>
                    <div className='Service_card-img'>
                        <img src={img} alt="" />
                    </div>
                    <p className='Service_card-text'>Lorem ipsum dolor
                        sit amet</p>
                </div>
                <div className='Service_card'>
                    <div className='Service_card-img'>
                        <img src={img} alt="" />
                    </div>
                    <p className='Service_card-text'>Lorem ipsum dolor
                        sit amet</p>
                </div>
            </Container>

            <div className='Service-color'></div>
            <img className='Service-imghend' src={hend} alt="" />
        </div>
    )
}
