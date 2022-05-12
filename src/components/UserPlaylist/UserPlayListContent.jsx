import React, { useEffect } from 'react'
import '../css/userPlaylist.css'
import UserPlayListsBlocks from './UserPlayListsBlocks'
import { Alert, Pagination } from '@mui/material'
import playlistStore from '../../store/playlistStore'
import { getUserPlaylist } from '../../service/playlistService'
import { observer } from 'mobx-react-lite'
const UserPlayListContent = observer(()=>{

    useEffect(()=>{
        getUserPlaylist(playlistStore.page-1,10).then((res)=>{
            playlistStore.setUserPlaylists(res.data)
        })
    },[playlistStore.page,playlistStore.deleteMessage])

  return (
      <>
      <div className="user-playlist-content">
          <h3>Плейлисты</h3>
          {playlistStore.message?
          <Alert severity="error">{playlistStore.message}</Alert>:null
          }

          <div className="user-playlist-container">
              {playlistStore?.userPlaylists?.content?.map((d)=>{
                  return (
                    <UserPlayListsBlocks data={d}/>
                  )
              })
        
              }
          </div>
          
      </div>
      
      <div className="playlist-pagination" >
      {playlistStore?.userPlaylists?.content?.length!==0?
          <Pagination count={playlistStore?.userPlaylists?.totalPages} onChange={(e,value)=>playlistStore.setPage(value)} />
          :'Плейлистов не найдено'}
      </div>
      </>

  )
})

export default UserPlayListContent