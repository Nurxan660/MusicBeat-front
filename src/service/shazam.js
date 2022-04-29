import axios from "axios";
const recognize=(blob)=>{
  let data = {
    'api_token': 'df036b03289fb81106374cd8dff14aa6',
    'file': blob,
};
    const options = {
        method: 'POST',
        url: 'https://api.audd.io/',
        data:data,
        headers: { 'Content-Type': 'multipart/form-data' },
        
      };

      return axios.request(options)
}
export {recognize}
