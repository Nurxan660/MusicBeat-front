import React, { useEffect } from 'react'
import musicStore from '../../store/musicStore'
import { observer } from 'mobx-react-lite'
import play from '../../images/play.png'
import MusicListModal from '../PlayList/MusicListModal'
import { getUser } from '../../service/tokenService'
import download from '../../images/download.png'
import Pagination from '@mui/material/Pagination';
import { getMusicByPattern } from '../../service/musicService'
const SearchResponseContent = observer(()=>{
    const user=getUser()

    useEffect(()=>{
        musicStore.handleOnChange('',0,10)
    },[musicStore.canselSearch])


    

    

  

  
    const audioFunction = (index) => {
            musicStore.setTrackIndex(index)
        
        
      };
  return (
      <>
    <div className="music-list">
        <div className="music-list-header">
            <span>Name</span>
            <span>Album</span>
            <span>Duration</span>
        </div>
        {musicStore?.musicBySearch?.content?.map((d,index)=>{
      return (
            <div className="music-list-content">
                <div className="music-list-name">
                    
                    <img src={play}  className="play" onClick={()=>audioFunction(index)}/>
                    
                    <div className="music-list-img">
                        <img src={d?.imageUrl}/>
                    </div>
                    <span className="musicName">{d?.author}</span>
                </div>
                <span className="album">{d?.name}</span>
                <div className='down'>
                <span className="musicList-duration">{d?.duration}</span>
                {user&&
                <a href={d?.downloadUrl} style={{textDecoration:"none"}} download><img src={download} style={{cursor:"pointer"}} className="download"/></a>}
                </div>
            </div>)})}
       
        </div>
        <div className="pagination-music">
            {musicStore?.musicBySearch?.content?.length!==0?
        <Pagination count={musicStore.musicBySearch.totalPages} page={musicStore.page} onChange={(e,value)=>musicStore.handleOnChange(musicStore.searchValue,value-1,10)} />
            :'По вашему запросу ничего не найдено'}
        </div>
        </>
)

            })

export default SearchResponseContent