import { makeAutoObservable } from "mobx";


class MusicStore{
    musicByCategories=[]
    trackIndex=0
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
    
  

    






}

export default new MusicStore()
