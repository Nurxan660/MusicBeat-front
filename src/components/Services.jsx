import React from 'react'
import Service from './Service/Service'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
const Services = () => {
  return (
    <>
    <Navbar/>
    <main className="main">
    <Service/>
    </main>
    <Footer/>
    </>
  )
}

export default Services