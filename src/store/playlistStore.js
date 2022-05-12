import { makeAutoObservable } from "mobx";
import { getMusicByPattern } from "../service/musicService";

class PlaylistStore{
   
    
    musicBySearch={}
    searchValue=''
    canselSearch=false
    open=false
    name=''
    message=''
    userPlaylists={}
    page=1
    playlistDetailPage=1
    deleteMessage=false
    userPlaylistMusic={}
    playListData={}
    addedMusicMessage=false
    constructor(){
        makeAutoObservable(this)
    }  

    setSearchValue(value){
        this.searchValue=value

    }

     handleOnChange(pattern,page,size){
         
         this.setSearchValue(pattern)
         getMusicByPattern(pattern,page,size).then((res)=>{
             this.musicBySearch=res.data
         })
        }
        setCanselSearch(){
            this.canselSearch=!this.canselSearch
        }


        setOpen(isOpen){
         this.open=isOpen
        }

        setMessage(message){
         this.message=message
        }

        setUserPlaylists(data){
            this.userPlaylists=data

        }

        setPage(page){
            this.page=page
        }

        setDetailPage(page){
            this.playlistDetailPage=page
        }

        setDeleteMessage(){
            this.deleteMessage=!this.deleteMessage
        }

        setUserPlayListMusic(data){
            this.userPlaylistMusic=data
        }

        setPlaylistData(data){
            this.playListData=data
        }

        setAddedMusicMessage(){
            this.addedMusicMessage=!this.addedMusicMessage
        }
        

        
     }

     

     

     export default new PlaylistStore()

    