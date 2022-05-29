import React, { useState } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useRef } from 'react';
import { Alert,CircularProgress } from '@mui/material';
import { changePassword } from '../../service/userService';

const required = (value) => {
    if (!value) {
      return (
        <Alert severity="error">This field is required</Alert>
      );
    }
  };
  const validPassword=(value)=>{
    if(value.length<6||value.length>40){
      return <Alert severity="error">The password must be between 6 and 40 characters</Alert>
    }
}
const PasswordChanger = () => {
    const form=useRef()
    const checkBtn = useRef();
    const [oldPassword,setOldPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    const [message,setMessage]=useState("")
    const [isError,setIsError]=useState(false)
    const [loading,setLoading]=useState(false);
    const oldPasswordChange=(e)=>{
        setOldPassword(e.target.value)
    }
    const newPasswordChange=(e)=>{
        setNewPassword(e.target.value)
    }

    const handleOnClick=(e)=>{
        e.preventDefault();
        form.current.validateAll()
        if (checkBtn.current.context._errors.length === 0) {
            setLoading(true)

            changePassword(oldPassword,newPassword).then((res)=>{
                    
                    setTimeout(()=>{
                        setIsError(false)
                        setMessage(res.data)
                        setOldPassword('')
                       setNewPassword('')
                        setLoading(false)
                    },2000)
                   
                
            }).catch((error)=>{
                setLoading(false)
                setIsError(true)
                setMessage(error.response.data.message)
                setTimeout(()=>{
                    setMessage('')
                },2000)
            })
        }
    }
  return (
      <div className="password-change">
          <div className="password-change-content">
          <div className="header">Password change</div>

<Form ref={form} onSubmit={handleOnClick}>
    <div className="form">
        
        <div className='form-group'>
            <label for="nickname">Old password</label>
            <Input className="formInput"  type="password" name="email" placeholder="old password" onChange={oldPasswordChange} value={oldPassword} validations={[required]}></Input>
        </div>
        <div className='form-group'>
            <label for="password">New Password</label>
            <Input className="formInput"  type="password" name="password"   placeholder="new password" onChange={newPasswordChange} value={newPassword} validations={[required,validPassword]}></Input>
        </div>
    </div>
    
    
    <div className='footer'>
                <button type="submit" className='btn' disabled={loading}>{loading?(
                    <div className="spinner">
                <CircularProgress color="inherit" />
                </div>
                ):"Change"}</button>
                
            </div>
    {message&&(
             <Alert severity={isError?"error":"success"}>{message}</Alert>
            )}
    <CheckButton style={{ display: "none" }} ref={checkBtn} />

</Form>
          </div>
      </div>
  )
}

export default PasswordChanger