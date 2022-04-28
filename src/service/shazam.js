import axios from "axios";
const recognize=(blob)=>{
    const data = new FormData();
      data.append("file", blob,"data.mp3");
    const options = {
        method: 'POST',
        url: 'https://shazam-core.p.rapidapi.com/v1/tracks/recognize',
        headers: {
          'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
          'X-RapidAPI-Key': '6c057e9d4cmsh5f3eddd0f753f00p1a7f96jsn9ab169946c96',
        },
        data: data
      };

      return axios.request(options)
}
export {recognize}
