import { observer } from 'mobx-react-lite'
import React from 'react'
import tame from '../../images/tame.png'
import musicStore from '../../store/musicStore'

const MusicContent = observer(()=>{
  return (
    <div className="music">
      
        <div className="music-image">
            <img src={musicStore?.musicByCategories[0]?.category?.categoryImg}></img>
        </div>
        <div className="music-description">
            
            <p>{musicStore?.musicByCategories[0]?.category?.categoryName}</p>
            <h6>{musicStore?.musicByCategories[0]?.music?.name}</h6>
            <h6>{musicStore?.musicByCategories[0]?.music?.duration}</h6>
            
        </div>
        </div>
  )
})

export default MusicContent