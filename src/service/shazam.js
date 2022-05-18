import axios from "axios";
const recognize=(blob)=>{
  let data = {
    'api_token': '230c804a4a77a08594b3115e6e12e8bb',
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
