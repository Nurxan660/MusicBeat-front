import React from 'react'
import tame from '../../images/tame.png'
import musicStore from '../../store/musicStore'
import { observer } from 'mobx-react-lite'
import play from '../../images/play.png'
import MusicListModal from './MusicListModal'
import { getUser } from '../../service/tokenService'
import download from '../../images/download.png'
const MusicList = observer(({player})=>{
    const [open, setOpen] = React.useState(false);
    const user=getUser()

  

  const handleClose = () => {
    setOpen(false);
  };
    const audioFunction = (index) => {
        if(user){
            musicStore.setTrackIndex(index)
        }
        else{
            setOpen(true);
        }
        
      };

  return (
      
       <>
        <div className="music-list">
        <div className="music-list-header">
            <span>Name</span>
            <span>Album</span>
            <span>Duration</span>
        </div>
        {musicStore.musicByCategories.map((d,index)=>{
      return (
            <div className="music-list-content">
                <div className="music-list-name">
                    
                    <img src={play}  className="play" onClick={()=>audioFunction(index)}/>
                    
                    <div className="music-list-img">
                        <img src={d.music.imageUrl}/>
                    </div>
                    <span className="musicName">{d.music.author}</span>
                </div>
                <span className="album">{d.music.album}</span>
                <div className='down'>
                <span className="musicList-duration">{d.music.duration}</span>
                <a href={d.music.downloadUrl} style={{textDecoration:"none"}} download><img src={download} style={{cursor:"pointer"}} className="download"/></a>
                </div>
            </div>)})}
       
        </div>
        <MusicListModal open={open} handleClose={handleClose}/>
        </>
      )
      
   
  
})

export default MusicList