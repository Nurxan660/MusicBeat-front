import React, { useEffect, useState } from 'react'
import logo from '../images/icon.png'
import MicRecorder from 'mic-recorder-to-mp3';
import { recognize } from '../service/shazam';
import data from '../mp3/data.mp3'
const Shazam = () => {
    const Mp3Recorder = new MicRecorder({ bitRate: 128 })
    const [isRecording,setIsRecording]=useState(false)
    const [isBlocked,setIsBlocked]=useState(false)
    const [file,setFile]=useState('')
    const [blob,setBlob]=useState('')

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
                        const file = new File(buffer, 'me-at-thevoice.mp3', {
                            type: blob.type,
                            lastModified: Date.now()
                          });
                        console.log(blob)
                        setFile(file)
                        setBlob(blob)
                        setIsRecording(false)
                        
                      
                    }).then(()=>{
                        recognize(new Blob([data],{type:'audio/mp3'})).then((res)=>{
                            console.log(res.data)
                        }).catch((err)=>{
                            console.log(err.response.data)
                        })
                    }).catch((e) => console.error(e))
                },2000)
    }).catch((e) => console.error(e));
      }}
    
  return (
    <div className="shazam">
        <button className={isRecording?"shazam-button pulse-shazam":"shazam-button"} onClick={start} disabled={isRecording}></button>
    </div>
  )
}

export default Shazam