import React from 'react'
import Container from '../container/container'
import './Certiflcates.scss'
import img1 from '../../assets/images/Rectangle393.png'
import img2 from '../../assets/images/Rectangle392.png'
import img3 from '../../assets/images/Rectangle394.png'
export default function Certiflcates() {
    return (
        <div className='Certiflcates'>
            <Container>
                <h3 className='Certiflcates-title'>СЕРТИФИКАТЫ</h3>
                <div className='Certiflcates-wrap'>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
