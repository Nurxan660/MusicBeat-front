import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useParams } from 'react-router-dom';
import { confirm } from '../service/authService';
const Restore = () => {
    const params=useParams()
    const [message,setMessage]=useState('')

    useEffect(()=>{
        confirm(params.id).then((res)=>{
            setMessage(res.data)
        })
    },[])

  return (
    
       <>
          { message&&
    <Alert severity="info" style={{width:"350px",margin:"100px"}}>
      {message}
    </Alert>}
    </>


  )
}

export default Restore