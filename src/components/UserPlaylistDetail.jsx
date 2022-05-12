import React from 'react'
import PlaylistDetailsNav from './UserPlaylistDetail/PlaylistDetailsNav'
import PlayListDetaiSearch from './UserPlaylistDetail/PlayListDetaiSearch'
import PlayListDetailResponse from './UserPlaylistDetail/PlayListDetailResponse'
import PlaylistAdded from './UserPlaylistDetail/PlaylistAdded'
const UserPlaylistDetail = () => {
  return (
      <>
    <PlaylistDetailsNav/>
    <PlaylistAdded/>
    <hr/>
    <PlayListDetaiSearch/>
    <PlayListDetailResponse/>
    </>
  )
}

export default UserPlaylistDetail