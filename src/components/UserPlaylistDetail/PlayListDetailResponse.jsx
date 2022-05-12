import { Pagination } from '@mui/material'
import React from 'react'
import playlistStore from '../../store/playlistStore'
import { observer } from 'mobx-react-lite'
import { addMusic } from '../../service/playlistService'
import { useParams } from 'react-router-dom'
const PlayListDetailResponse = observer(()=>{

    const params=useParams()

    const handleAddButton=(musicId)=>{
        addMusic(musicId,params.id).then((res)=>{
            playlistStore.setAddedMusicMessage()
        })

    }
  return (
      <>
    <div className="playlist-detail-search-res">
    {playlistStore?.musicBySearch?.content?.map((d,index)=>{
      return (
        <div className="playlist-detail-search-res-content">
            <div className="playlist-detail-search-img">
                <img src={d?.imageUrl}/>
            </div>
            <div className="playlist-detail-search-author">
                <span>
                {d?.author}
                </span>
                <span>
                {d?.album}
                </span>
            </div>
            <button onClick={()=>handleAddButton(d.musicId)}>Добавить</button>
        </div>
        )})}
        </div>
        <div className="pagination-music" style={{marginBottom:"10px"}}>
            {playlistStore?.musicBySearch?.content?.length!==0?
        <Pagination count={playlistStore.musicBySearch.totalPages} page={playlistStore.page} onChange={(e,value)=>playlistStore.handleOnChange(playlistStore.searchValue,value-1,10)} />
            :'По вашему запросу ничего не найдено'}
        </div>
        </>
  )
})

export default PlayListDetailResponse