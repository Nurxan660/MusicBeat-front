import axios from 'axios'
import { removeUser } from './tokenService';
const API_URL = "http://localhost:8080/auth";


const reg=(nickname,email,password)=>{
    return axios.post(API_URL+'/signup',{nickname,email,password})
}

const login = (email, password) => {
    return axios
      .post(API_URL+"/signin", {
        email,
        password
      })
  };

  const logout = (id) => {
    return axios.delete(API_URL+`/logout?userId=${id}`)
  };
export {reg,login,logout}