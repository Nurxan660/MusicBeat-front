import React, { useEffect, useState } from 'react'
import logo from '../images/icon.png'
import MicRecorder from 'mic-recorder-to-mp3';
import { recognize } from '../service/shazam';
import Modal from './Modal/Modal';
const Shazam = () => {
    const Mp3Recorder = new MicRecorder({ bitRate: 128 })
    const [isRecording,setIsRecording]=useState(false)
    const [isBlocked,setIsBlocked]=useState(false)
    const [blob,setBlob]=useState('')
    const [open,setOpen]=useState(false)
    const [message,setMessage]=useState('')

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({ audio: true },
            () => {
              console.log('Permission Granted');
              setIsBlocked(false)
            },
            () => {
              console.log('Permission Denied');
              setIsBlocked(true)
            },
          );
          
    },[])

    const handleClose=()=>{
      setOpen(false)
    }

    const start = () => {
        if (isBlocked) {
          console.log('Permission Denied');
        } else {
          Mp3Recorder
            .start()
            .then(() => {
              setIsRecording(true)
            }).then(()=>{
                setTimeout(()=>{
                    Mp3Recorder.stop() .getMp3().then(([buffer, blob]) => {
                        console.log(blob)
                        setBlob(blob)
                        return blob
                    }).then((blob)=>{
                      console.log()
                        recognize(blob).then((res)=>{
                          setIsRecording(false)
                          setBlob('')
                          setMessage(res.data)
                          setOpen(true)
                            console.log(res.data)
                        }).catch((err)=>{
                            console.log(err.response.data)
                        })
                    }).catch((e) => console.error(e))
                },6000)
    }).catch((e) => console.error(e));
      }}
    
  return (
    <div className="shazam">
      <Modal handleClose={handleClose} open={open} message={message}/>
        <button className={isRecording?"shazam-button pulse-shazam":"shazam-button"} onClick={start} disabled={isRecording}></button>
    </div>
  )
}

export default Shazam