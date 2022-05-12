import React from 'react'
import SearchBar from "material-ui-search-bar";
import playlistStore from '../../store/playlistStore';
import { observer } from 'mobx-react-lite';
const PlayListDetaiSearch = observer(()=>{
  return (
    
    <div className="search-bar-playlist-detail">
    <SearchBar style={{width:"300px",margin:"40px",borderRadius:"15px"}}
    value={playlistStore.searchValue}
    onChange={(e)=>playlistStore.handleOnChange(e,0,10)}
    onRequestSearch={() => console.log("[df")}
    onCancelSearch={()=>playlistStore.setCanselSearch()}
  /></div>
  )
})

export default PlayListDetaiSearch