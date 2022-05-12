import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import playlistStore from '../../store/playlistStore';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { createPlaylist } from '../../service/playlistService';
import { Pagination } from '@mui/material';
const PlaylistCreationForm = observer(()=>{

  const [name,setName]=useState('')
  const navigate=useNavigate()


  const handleCreatePlaylist=(e)=>{
    createPlaylist(name).then((res)=>{
      playlistStore.setOpen(false)
        navigate("/user/playlists")
    }).catch((err)=>{
        playlistStore.setMessage(err.response.data)
        setTimeout(()=>{
          playlistStore.setMessage('')
        },2000)
    })
}


  return (
    <div>
      
      <Dialog open={playlistStore.open} >
        <DialogTitle>Плейлист</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Чтобы создать свой плейлист , введите имя вашего плейлиста
          </DialogContentText>
          <TextField
          onChange={(e)=>setName(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Имя"
            type="text"
            fullWidth
            variant="standard"
            value={name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>playlistStore.setOpen(false)}>Закрыть</Button>
          <Button onClick={handleCreatePlaylist}>Создать</Button>
        </DialogActions>
      </Dialog>
      
    </div>
  )
})

export default PlaylistCreationForm