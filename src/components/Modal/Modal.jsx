import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';


const Modal = ({handleClose,open,message}) => {
    
  return (
    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {message.status}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message?.result?.album+' '+message?.result?.artist+" "+message?.result?.release_date
            +' '+message?.result?.timecode}
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal