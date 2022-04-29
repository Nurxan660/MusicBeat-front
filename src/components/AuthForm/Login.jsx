import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../service/authService'
import authStore from '../../store/authStore'
import { setUser } from '../../service/tokenService'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Alert from '@mui/material/Alert';
import { observer } from 'mobx-react-lite';
import CheckButton from "react-validation/build/button";

const Login = observer(()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
    const [loading,setLoading]=useState(false)
    const form=useRef()
    const checkBtn = useRef();
    const navigate=useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            authStore.setMessage(null)
        },2000)
    },[])

    const handleOnClick=(e)=>{
        e.preventDefault();
        form.current.validateAll()
        if (checkBtn.current.context._errors.length === 0) {
            setLoading(true)

            login(email,password).then((res)=>{
                console.log(res)
                if(res.data.accessToken){
                    
                    setTimeout(()=>{
                        setEmail('')
                       setPassword('')
                       setUser(res.data)
                       authStore.setCurrentUser(res.data)
                        setLoading(false)
                        navigate('/')
                    },1000)
                   
                }
            }).catch((error)=>{
                setLoading(false)
                setMessage(error.response.data.message)
            })
        }
    }
    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }
  return (
    <div class="sign-in-htm">
        {authStore.message ?(
            <div className="reg-login-alert">
                <Alert severity="success">{authStore.message}</Alert>
           </div>
        ):null}
                <Form ref={form} onSubmit={handleOnClick}>

				<div class="group">
					<label for="user" class="label">Email</label>
					<Input id="user" type="text" class="input" value={email} onChange={onChangeEmail}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<Input id="pass" type="password" class="input" data-type="password" value={password} onChange={onChangePassword}/>
				</div>
				<div class="group">
					<Input id="check" type="checkbox" class="check" checked/>
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<Input type="submit" class="button" value="Log In"/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />

                </Form>
			</div>
  )
}) 

export default Login