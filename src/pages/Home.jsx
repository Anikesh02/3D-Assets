import React from 'react'
import Model from '../components/model'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <h1 className='mt-[200px] z-10'>Hey there</h1>
            <Model />
        </>
    )
}

export default Home