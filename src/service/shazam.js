import axios from "axios";
const recognize=(blob)=>{
  let data = {
    'api_token': '1fada6f14d019d62682ce39fb67b9533',
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
