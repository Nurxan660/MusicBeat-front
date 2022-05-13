import React,{useRef} from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import authStore from '../../store/authStore';
import {isEmail} from 'validator'
import { reg } from '../../service/authService';
import Alert from '@mui/material/Alert';

const validEmail=(value)=>{
    
    if(!isEmail(value)){
        return (
        <Alert severity="error">This is not valid email</Alert>
        )
    }
}

const required = (value) => {
    if (!value) {
      return (
        <Alert severity="error">This field is required</Alert>

      );
    }
  };
  const validName=(value)=>{
      if(value.length<3||value.length>20){
        return <Alert severity="error">The username must be between 3 and 20 characters</Alert>
      }
  }

  const validPassword=(value)=>{
    if(value.length<6||value.length>40){
      return <Alert severity="error">The password must be between 6 and 40 characters</Alert>
    }
}
const Reg=observer(()=>{

    const navigate=useNavigate()
    const form=useRef()
    const checkBtn = useRef();
 

    
    

const onChangeEmail=(e)=>{
    authStore.setEmail(e.target.value)
}
    const onChangePas = (e) => {
       
        authStore.setPassword(e.target.value);
    }
   
    const onChangeNic = (e) => {
       
        authStore.setNickname(e.target.value);
    }
    

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        
        form.current.validateAll()
        if (checkBtn.current.context._errors.length === 0) {
        reg(authStore.nickname,authStore.email, authStore.password)
    .then((res)=>{
        
        authStore.setMessage(res.data.message)
        setTimeout(()=>{
            authStore.setMessage(null)
        },2000)
        authStore.setSucess(true)
        window.location.reload()
        navigate("/signin")
    })
    .catch((err)=>{
        authStore.setMessage(err.response.data.message)
        authStore.setSucess(false)
        
    })
}
    }

  return (
    <div class="sign-up-htm">
        <Form onSubmit={handleOnSubmit} ref={form}>
				<div className="group">
					<label for="user" className="label">Username</label>
					<Input id="user" type="text" className="input" value={authStore.nickname}
                     onChange={onChangeNic} validations={[required,validName]} />
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<Input id="pass" type="password" className="input" data-type="password" 
                    value={authStore.password} onChange={onChangePas} validations={[required,validPassword]}/>
				</div>
				
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<Input id="pass" type="text" className="input" value={authStore.email} onChange={onChangeEmail}  
                    validations={[required,validEmail]}/>
				</div>
				<div className="group">
					<Input type="submit" className="button" value="Sign Up"/>
				</div>
                {authStore.message&&
    ( <div className="auth-alert">
        {authStore.sucess?<Alert severity="success">{authStore.message}</Alert>:<Alert severity="error">{authStore.message}</Alert>}
    </div>)}
				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />

                    </Form>
			</div>
  )
})
export default Reg