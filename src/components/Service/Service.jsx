import React from 'react'

const Service = () => {
  return (
    <section className="service_section ">
    <div className="container">
      <div className="service_detail">
        <h3>
          Services
        </h3>
        <h2>
          We provide
        </h2>
      </div>
      <div className="service_img-container">
        <div className="service_img-box i-box-1">
          <a href="">Identifier AI </a>
        </div>
        <div className="service_img-box i-box-2">
          <a href="">Personal Library </a>
        </div>
        <div className="service_img-box i-box-3">
          <a href="">What's trending </a>
        </div>
        <div className="service_img-box i-box-4">
          <a href="">Share thoughts </a>
        </div>
      </div>
      <div className="service_btn">
        <a href="">
          <span>
            Read More
          </span>
          <img src="images/arrow-black.png" alt="" className="ml-2" />
        </a>
      </div>
    </div>
  </section>
  )
}

export default Service