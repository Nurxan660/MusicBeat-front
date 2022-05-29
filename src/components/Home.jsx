import React from 'react'
import Slider from './Slider/Slider'
import Welcome from './Welcome/Welcome'
import Service from './Service/Service'
import TopCharts from './TopCharts/TopCharts'
import Story from './Story/Story'
import PlaylistCreationForm from './UserPlaylist/PlaylistCreationForm'
const Home = () => {
  return (
    <>
    <div style={{paddingBottom:"20px"}}>
    <Slider/>
    <Welcome/>
    <Service/>
    <TopCharts/>
    <Story/>
    <PlaylistCreationForm/>
    </div>
    
    </>
  )
}

export default Home