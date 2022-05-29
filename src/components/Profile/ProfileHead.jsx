import React, { useEffect, useState } from 'react'
import profile from '../../images/profilee.png'
import { getProfile } from '../../service/userService'
const ProfileHead = () => {
    const [data,setData]=useState()
    useEffect(()=>{
        getProfile().then((res)=>{
            setData(res.data)
        })
    },[])
  return (
    <div className="profile-detail">
    <div className="profile-detail-img">
    <img src={profile}/>
    </div>
    <div className="profile-detail-text">
        <span className="profile-detail-head">Профиль</span>
        <span className="profile-detail-head-body">{data?.email}</span>
        <span className="profile-detail-head-footer">Никнейм: {data?.nickname}</span>
    </div>
    </div>
  )
}

export default ProfileHead