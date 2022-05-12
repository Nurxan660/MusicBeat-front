import React from 'react'
import stream from '../../images/stream.jpeg'
import { Link } from 'react-router-dom'
import playlistStore from '../../store/playlistStore'
const Welcome = () => {
  return (
    <section className="welcome_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className=" col-md-6">
          <div>
            <img className="img-fluid" src={stream} alt="" />
          </div>
        </div>
        <div className=" col-md-6">
          <div className="welcome_detail">
            <h3>
              Playlists
            </h3>
            <h2>
              Create your own playlist
            </h2>
            <p>
              Choose any music and just add to your playlist , then enjoy!
            </p>
            <div className="welcome_detail-btn">
                <span onClick={()=>playlistStore.setOpen(true)} style={{cursor:"pointer"}}>
                  Click to starting !
                </span>
                <img src="images/arrow-black.png" alt="" className="ml-2" />
                
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Welcome