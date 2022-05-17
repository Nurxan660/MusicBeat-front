import React,{useEffect, useState} from 'react'
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import { observer } from 'mobx-react-lite';
import musicStore from '../../store/musicStore';
import { toJS } from 'mobx';
import { useRef } from 'react';


const MusicPlayerFooter = observer(()=>{
  const player=useRef()
    console.log(player?.current?.audio?.current)
    console.log(toJS(musicStore?.musicByCategories[0]?.music?.url))

  const handleClickNext = () => {
    musicStore.setTrackIndexNext(musicStore.trackIndex)
  };

  const handleClickPrevious = () => {
    musicStore.setTrackIndexPrev(musicStore.trackIndex)
  };
  return (
    <AudioPlayer
        // style={{ width: "300px" }}
        style={{ backgroundColor:"black",color:"white",marginTop:"40px"}}
        // layout="horizontal"
        autoPlay={false}
        src={musicStore?.musicByCategories[musicStore.trackIndex]?.music?.url||musicStore?.musicByCategories[musicStore.trackIndex]?.url}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`${musicStore?.musicByCategories[musicStore.trackIndex]?.music?.name||musicStore?.musicByCategories[musicStore.trackIndex]?.name}`}
        preload="none"
        ref={player}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        showDownloadProgress={true}
        
        // other props here
      />
      
  )
})

export default MusicPlayerFooter