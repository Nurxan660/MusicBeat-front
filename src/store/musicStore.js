import { makeAutoObservable } from "mobx";
import { getMusicByPattern } from "../service/musicService";

class MusicStore{
    musicByCategories=[]
    trackIndex=0
    
    musicBySearch={}
    searchValue=''
    canselSearch=false
    constructor(){
        makeAutoObservable(this)
    }  

    setMusicByCategories(data){
        this.musicByCategories=data
    }

    setTrackIndexNext(currentTrack){
       if(currentTrack < this.musicByCategories.length - 1) {
                 this.trackIndex=this.trackIndex+1
        }
        else{
            this.trackIndex=0
        }
    }

    setTrackIndexPrev(currentTrack){
        if(currentTrack ===0) {
            this.trackIndex=this.musicByCategories.length - 1
        }
      else{
       this.trackIndex=this.trackIndex-1
   }
     }


     setTrackIndex(currentTrack){
        this.trackIndex=currentTrack
     }

     

     setSearchValue(value){
         this.searchValue=value

     }

     handleOnChange(pattern,page,size){
         
         this.setSearchValue(pattern)
         getMusicByPattern(pattern,page,size).then((res)=>{
             
             this.musicBySearch=res.data
             this.musicByCategories=res.data.content
         })
        }
        setCanselSearch(){
            this.canselSearch=!this.canselSearch
        }
        
     }

    
    
     

    
  

    








export default new MusicStore()
