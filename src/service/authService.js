import axios from 'axios'

const API_URL = "https://music-beats32.herokuapp.com/auth";

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