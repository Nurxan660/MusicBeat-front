import React from 'react'
import PlaylistDetailsNav from './UserPlaylistDetail/PlaylistDetailsNav'
import PlayListDetaiSearch from './UserPlaylistDetail/PlayListDetaiSearch'
import PlayListDetailResponse from './UserPlaylistDetail/PlayListDetailResponse'
import PlaylistAdded from './UserPlaylistDetail/PlaylistAdded'
const UserPlaylistDetail = () => {
  return (
      <>
    <PlaylistDetailsNav />
    <div style={{backgroundColor:"#111111",height:"100%",paddingTop:"13px"}}>
    <PlaylistAdded/>
    <hr/>
    <PlayListDetaiSearch/>
    <PlayListDetailResponse/>
    </div>
    </>
  )
}

export default UserPlaylistDetail