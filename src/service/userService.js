import axios from 'axios'
import api from './interceptor.js'
const API_URL = "https://music-beats32.herokuapp.com/user";

const getProfile=()=>{
    return api.get('user/profile')
}

const changePassword=(oldPassword,newPassword)=>{
    return api.put('user/change/password',{oldPassword,newPassword})
}

export {getProfile,changePassword}
