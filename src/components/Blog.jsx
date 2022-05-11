import React from 'react'
import Story from './Story/Story'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
const Blog = () => {
  return (
    <>
    <Navbar/>
    <main className="main">
      <div className="story">
    <Story/>
    </div>
    </main>
    <Footer/>
    </>
  )
}

export default Blog