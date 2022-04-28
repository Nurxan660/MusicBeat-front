import React from 'react'
import artists from '../../images/artists.jpeg'

const Story = () => {
  return (
    <section className="layout_padding story_section">
    <div className="container-fluid">
      <div className="row">
        <div className=" col-md-6">
          <div>
            <img className="img-fluid" src={artists} alt="" />
          </div>
        </div>
        <div className=" col-md-6">
          <div className="story_detail">
            <h3>
              Blog
            </h3>
            <h2>
              Our opening
            </h2>
            <p>
              Fond of a particular idea, our team emmersed the idea
              of joining both music identifier and streaming,
              additionally saving them thus the creation of
              this special app came in mind. It is no secret
              that people spend their time on phones most hours,
              and music serves a great action in anyone's life. We hope
              our app could meet and satisfy your standarts.
            </p>
            <div className="story_detail-btn">
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

export default Story