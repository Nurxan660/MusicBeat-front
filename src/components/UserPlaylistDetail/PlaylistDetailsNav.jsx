import React, { useEffect } from 'react'
import { getByUniqueAddress } from '../../service/playlistService'
import { useParams } from 'react-router-dom'
import playlistStore from '../../store/playlistStore'
import { observer } from 'mobx-react-lite'
import { getPlayListData } from '../../service/playlistService'
const PlaylistDetailsNav = observer(()=>{
    const params=useParams()
    useEffect(()=>{
        getPlayListData(params.id).then((res)=>{
            playlistStore.setPlaylistData(res.data)
        })
    },[])
  return (
      <>
    <div className="playlist-detail">
        <div className="playlist-detail-img">
          <img src='https://i.pinimg.com/originals/99/d2/9d/99d29d59d6ccc7014158748ff4dea452.png'/>
        </div>
        <div className="playlist-detail-text">
            <span className="pl-detail-head">Плейлист</span>
            <span className="pl-detail-head-body">{playlistStore?.playListData?.playListName}</span>
            <span className="pl-detail-head-footer">Автор: {playlistStore?.playListData?.user?.nickname}</span>
        </div>
        </div>
            
        </>
  )
})

export default PlaylistDetailsNav