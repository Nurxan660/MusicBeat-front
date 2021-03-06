import axios from 'axios'

const API_URL = "https://music-beats32.herokuapp.com/music";

const getCategories=()=>{
    return axios.get(API_URL+'/get/mainCategories')
}

const getMusicByCategories=(id)=>{
    return axios.get(API_URL+`/get/musicByCategories?categoryId=${id}`)
}

const getMusicByPattern=(pattern,page,size)=>{
    return axios.get(API_URL+`/get/allByPattern?pattern=${pattern}&page=${page}&size=${size}`)
}

export {getCategories,getMusicByCategories,getMusicByPattern}