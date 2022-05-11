import React from 'react'
import Slider from './Slider/Slider'
import Welcome from './Welcome/Welcome'
import Service from './Service/Service'
import TopCharts from './TopCharts/TopCharts'
import Story from './Story/Story'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
const Home = () => {
  return (
    <>
    <Navbar/>
    <main className="main">
    <Slider/>
    <Welcome/>
    <Service/>
    <TopCharts/>
    <Story/>
    </main>
    <Footer/>
    </>
  )
}

export default Home