import React, { useState } from 'react'
import SearchBar from "material-ui-search-bar";
import musicStore from '../../store/musicStore';
import { getMusicByPattern } from '../../service/musicService';
import { observer } from 'mobx-react-lite';
const SearchComp = observer(()=>{

  
  return (
    <div className="search-bar">
    <SearchBar style={{width:"300px",margin:"40px",borderRadius:"15px"}}
    value={musicStore.searchValue}
    onChange={(e)=>musicStore.handleOnChange(e,0,10)}
    onRequestSearch={() => console.log("[df")}
    onCancelSearch={()=>musicStore.setCanselSearch()}
  /></div>
  )
})

export default SearchComp