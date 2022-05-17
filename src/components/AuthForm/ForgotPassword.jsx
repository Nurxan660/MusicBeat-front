import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import authStore from '../../store/authStore';
import { observer } from 'mobx-react-lite';
import { restore } from '../../service/authService';
import Alert from '@mui/material/Alert';
const ForgotPassword = observer(()=>{
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')

    const handleSend=()=>{
        restore(email).then((res)=>{
           setMessage(res.data)
           setTimeout(()=>{
              setMessage('')
           },3000)
        })
    }
   
    return (
      <div>
        
        <Dialog open={authStore.openPasswordRestore} >
          <DialogTitle>Forgot password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To restore password , please write your email
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>authStore.setOpenPasswordRestore(false)}>Cancel</Button>
            <Button onClick={handleSend}>Send</Button>
            {
                message&&(
                    <Alert severity="success">{message}</Alert>
                )
            }
          </DialogActions>
        </Dialog>
      </div>
    );
})

export default ForgotPassword