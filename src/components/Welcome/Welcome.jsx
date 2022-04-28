import React from 'react'
import stream from '../../images/stream.jpeg'
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
              Features
            </h3>
            <h2>
              Download and stream
            </h2>
            <p>
              Our independent voice AI platform allows brands in a wide range
              of industries to add interfaces and wake words
              to any hardware, software, or mobile app. Built on our
              recognizer technology, MB delivers unprecedented speed and accuracy.
            </p>
            <div className="welcome_detail-btn">
              <a href="">
                <span>
                  Read More
                </span>
                <img src="images/arrow-black.png" alt="" className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Welcome