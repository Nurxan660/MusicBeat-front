import { makeAutoObservable } from "mobx";


class AuthStore{
    nickname=''
    email=''
    password=''
    message=''
    sucess=false
    currentUser=null

    constructor(){
        makeAutoObservable(this)
    }  

    setNickname(nickname){
        this.nickname=nickname
    }
    setEmail(email){
        this.email=email
    }
    setPassword(password){
        this.password=password
    }
    setMessage(message){
        this.message=message
    }
    setSucess(sucess){
        this.sucess=sucess
    }
    setCurrentUser(currentUser){
        this.currentUser=currentUser
    }

  

    






}

export default new AuthStore()

