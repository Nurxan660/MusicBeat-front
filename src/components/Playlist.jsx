import React,{useState,useEffect, useRef} from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MusicContent from './PlayList/MusicContent'
import MusicList from './PlayList/MusicList'
import { useParams } from 'react-router-dom'
import { getMusicByCategories } from '../service/musicService'
import musicStore from '../store/musicStore'
import { createRef } from 'react'
const Playlist = () => {
    const params=useParams();
    const player=useRef()
    console.log(player?.current?.audio?.current)

    useEffect(()=>{
   getMusicByCategories(params.id).then((res)=>{
       musicStore.setMusicByCategories(res.data)
   })
    },[])
  return (
      <>
      <Navbar/>
      <main className="main">
    <MusicContent  />
    <MusicList player={player} />
    </main>
    <Footer player={player}/>
    </>
  )
}

export default Playlist