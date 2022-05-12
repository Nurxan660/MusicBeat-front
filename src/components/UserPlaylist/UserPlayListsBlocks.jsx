import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Alert } from '@mui/material';
import { Pagination } from '@mui/material';
import { getUser } from '../../service/tokenService';
import { deletePlaylist } from '../../service/playlistService';
import playlistStore from '../../store/playlistStore';
import { Link } from 'react-router-dom';
const UserPlayListsBlocks = ({data}) => {
    const user=getUser()
    

    const [contextMenu, setContextMenu] = React.useState(null);

    const deletePlay=(id)=>{
        deletePlaylist(id).then((res)=>{
            playlistStore.setDeleteMessage()
            setContextMenu(null);
        })
    }

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };
  return (
      <>
      <Link to={`/user/playlist/detail/${data.uniqueAddress}` } style={{textDecoration:"none"}}>
    <div className="user-playlist-block" onContextMenu={handleContextMenu} >
                  <div className="user-playlist-image">
                      <img src="https://i.pinimg.com/originals/99/d2/9d/99d29d59d6ccc7014158748ff4dea452.png"/>
                  </div>
                  
                  <h5>{data?.playListName}</h5>
                  <span >Автор: {user.nickname}</span>
                  
              </div>
              </Link>

              <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={()=>deletePlay(data.playListId)}>Удалить</MenuItem>
        
      </Menu>

      

      </>
  )
}

export default UserPlayListsBlocks