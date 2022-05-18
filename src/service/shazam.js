import axios from "axios";
const recognize=(blob)=>{
  let data = {
    'api_token': '7d6c04fbe6c905364f6de2da7861fc2c',
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
