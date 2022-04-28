import React from 'react'
import youtube from '../../images/youtube.png'
import twitter from '../../images/twitter.png'
import linkedln from '../../images/linkedin.png'
import fb from '../../images/fb.png'

const Info = () => {
  return (
    <section className="info_section layout_padding">
    <div className="container">
      <div className="row">
        <div className=" col-md-4 info_detail">
          <div>
            <p>
              All rights reserved
            </p>
          </div>
        </div>
        <div className=" col-md-4 address_container">
          <div>
            <h3>
              Address:
            </h3>
            <div className="address_link-container">
              <a href="">
                <img src="images/location.png" alt=""/>
                <span> Address: Astana IT
                </span>
              </a>
              <a href="">
                <img src="images/phone.png" alt=""/>
                <span> Tel: +1 123 456 789
                </span>
              </a>
              <a href="">
                <img src="images/mail.png" alt=""/>
                <span>
                  Email: musicbeat@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className=" col-md-4 news_container">
          <div>
            <div>
              <h3>
                newsletter

              </h3>
              <form action="">
                <input type="email" placeholder="ENTER YOUR EMAIL"/>
                <div>
                  <button type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="social_container">
              <div>
                <img src={fb} alt=""/>
              </div>
              <div>
                <img src={twitter} alt=""/>
              </div>
              <div>
                <img src={linkedln} alt=""/>
              </div>
              <div>
                <img src={youtube} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Info