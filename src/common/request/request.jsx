import React, { useState } from 'react'
import Container from '../container/container'
import "./request.scss"
import ReactInputMask from "react-input-mask";
export default function Request() {


    return (
        <div className='Request'>
            <Container>
                <h1 className='Request-title'>ОСТАВЬТЕ ЗАЯВКУ</h1>
                <div className='Request-form'>
                    <input className='Request-input' type="text" placeholder='Ваше имя:' />
                    <ReactInputMask className='Request-input' type="text" placeholder='+998 --- --- -- --' mask='+\9\9\8 (99) 999-99-99' />
                    <input className='Request-input' type={'email'} placeholder='Email:' />
                    <button className='Request-btn'>Оставить заявку</button>
                </div>
            </Container >
        </div>
    )
}
