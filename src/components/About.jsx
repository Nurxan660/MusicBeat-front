import React from 'react'
import Welcome from './Welcome/Welcome'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
const About = () => {
  return (
    <>
    <Navbar/>
    <main className="main">
    <Welcome/>
    </main>
    <Footer/>
    </>
  )
}

export default About