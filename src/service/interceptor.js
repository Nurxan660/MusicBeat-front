import axios from "axios";
import authStore from "../store/authStore";
import { getLocalAccessToken,getLocalRefreshToken,updateLocalAccessToken,updateLocalRefreshToken,removeUser,getUser} from "./tokenService";
import { logout } from "./authService";
const instance = axios.create({
    baseURL: "https://music-beats32.herokuapp.com",
    headers: {
      "Content-Type": "application/json",
      
    },
  });
  instance.interceptors.request.use(
    (config) => {
      const token = getLocalAccessToken();
      console.log(config.url)
      if (token) {
       console.log("х")
         config.headers["Authorization"] = 'Bearer ' + token; 
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      
      if(err.response.data.message==="refresh token expired , please sign in"){
        authStore.setOpenTokenModal(true)
        authStore.setRefreshTokenExpiredMessage(err.response.data.message)
        logout(getUser().id).then(()=>{
          authStore.setCurrentUser(null)
          removeUser()
        })
  
      }
      const originalConfig = err.config;
      console.log("hi",err.response)
      if (originalConfig.url !== "/auth/signin" && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
           
          originalConfig._retry = true;
          try {
            const rs = await instance.post("/auth/refreshToken", {
              refreshToken: getLocalRefreshToken(),
            });
            const data = rs.data;
            console.log("scasc",data)
            
            
            updateLocalAccessToken(data.accessToken);
            updateLocalRefreshToken(data.refreshToken)
            
            
            return instance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    }
  );
  export default instance;