import { makeAutoObservable } from "mobx";


class AuthStore{
    nickname=''
    email=''
    password=''
    message=''
    sucess=false
    currentUser=null
    openPasswordRestore=false
    openNavbar=false;

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

    setOpenPasswordRestore(open){
        this.openPasswordRestore=open
    }
    setOpenNavbar(open){
        this.openNavbar=open
    }

  

    






}

export default new AuthStore()

