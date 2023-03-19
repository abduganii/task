import React from 'react'
import AboutUs from '../../common/Aboutus/aboutUs'
import Certiflcates from '../../common/Certiflcates/Certiflcates'
import Curs from '../../common/curs/Curs'
import Footer from '../../common/footer/footer'
import Header from '../../common/header/header'
import Hero from '../../common/hero/hero'
import Mentors from '../../common/Mentors/Mentors'
import News from '../../common/News/News'
import Request from '../../common/request/request'
import Service from '../../common/service/service'
import Statistika from '../../common/statistika/statistika'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <Service />
            <Curs />
            <Mentors />
            <Statistika />
            <News />
            <Certiflcates />
            <Request />
            <Footer />
        </>
    )
}
