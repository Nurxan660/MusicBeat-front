import React, { useEffect } from 'react'
import play from '../../images/play.png'
import download from '../../images/download.png'
import { Pagination } from '@mui/material'
import { getByUniqueAddress } from '../../service/playlistService'
import { useParams } from 'react-router-dom'
import playlistStore from '../../store/playlistStore'
import { observer } from 'mobx-react-lite'
import { deleteMusicFromPlaylist } from '../../service/playlistService'
const PlaylistAdded = observer(()=>{
    const params=useParams()

    useEffect(()=>{
        getByUniqueAddress(params.id,playlistStore.playlistDetailPage-1,10).then((res)=>{
            playlistStore.setUserPlayListMusic(res.data)
        })
    },[playlistStore.playlistDetailPage,playlistStore.addedMusicMessage])

    const handleDeleteButton=(musicId)=>{
        deleteMusicFromPlaylist(musicId,playlistStore?.playListData?.playListId).then(()=>{
            playlistStore.setAddedMusicMessage()
        })
    }
  return (
      <>
      {playlistStore?.userPlaylistMusic?.content?.map((d)=>{
          return (
            <div className="music-list-content" style={{marginLeft:"240px",marginRight:"240px",marginTop:"10px"}}>
            <div className="music-list-name">
                
                <img src={play}  className="play" />
                
                <div className="music-list-img">
                    <img src={d?.music?.imageUrl}/>
                </div>
                <span className="musicName">{d?.music?.name}</span>
            </div>
            <span className="album">{d?.music?.album}</span>
            <button style={{border:"none",backgroundColor:"black",color:"white",borderRadius:"7px"}} onClick={()=>handleDeleteButton(d?.music?.musicId)}>Удалить</button>
            <div className='down'>
            <span className="musicList-duration">2:32</span>
            <a href={d?.music?.downloadUrl} style={{textDecoration:"none"}} download><img src={download} style={{cursor:"pointer"}} className="download"/></a>
            </div>
        </div>
          )
      })
    }
            <div className="playlist-pagination" style={{marginTop:"10px"}}>
             <Pagination count={playlistStore.userPlaylistMusic.totalPages} onChange={(e,value)=>playlistStore.setDetailPage(value)}/>
             </div>
            </>
  )
})

export default PlaylistAdded