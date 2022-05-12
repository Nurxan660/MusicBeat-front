import api from './interceptor.js'
import axios from 'axios';
const API_URL = "https://music-beats32.herokuapp.com/playlist";


const createPlaylist=(name)=>{
    return api.post('/playlist/create',{name})
}

const deletePlaylist=(id)=>{
    return api.delete(`/playlist/delete?id=${id}`)
}

const getByUniqueAddress=(uniqueAddress,page,size)=>{
    return axios.get(API_URL+`/get/musicByPagination?uniqueAddress=${uniqueAddress}&page=${page}&size=${size}`)
}

const getPlayListData=(uniqueAddress)=>{
    return axios.get(API_URL+`/get/data?address=${uniqueAddress}`)
}


const getUserPlaylist=(page,size)=>{
    return api.get(`/playlist/get/user?page=${page}&size=${size}`)
}

const addMusic=(musicId,uniqueAddress)=>{
    return api.post('/playlist/add/music',{musicId,uniqueAddress})
}

const deleteMusicFromPlaylist=(musicId,playListId)=>{
    return api.delete(`/playlist/delete/music?musicId=${musicId}&playlistId=${playListId}`)
}
export {createPlaylist,getUserPlaylist,deletePlaylist,getByUniqueAddress,getPlayListData,addMusic,deleteMusicFromPlaylist}