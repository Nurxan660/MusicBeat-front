import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const MusicListModal = ({open,handleClose}) => {
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Error"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please login to get access to this resourse
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/signin" style={{textDecoration:"none"}}><Button >Login</Button></Link>     
        </DialogActions>
      </Dialog>
  )
}

export default MusicListModal