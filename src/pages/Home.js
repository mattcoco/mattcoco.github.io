import React, { useEffect } from 'react'
import TituloTypewriter from '../components/TituloTypewriter'
import HomeQuieros from '../components/HomeQuieros';
import HomeInfo from '../components/HomeInfo';
import HomeServicios from '../components/HomeServicios';
// import HomeBlog from '../components/HomeBlog';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <TituloTypewriter />
            <HomeQuieros />
            <HomeInfo />
            <HomeServicios />
            {/* <HomeBlog /> */}
        </>
    )
}

export default Home
