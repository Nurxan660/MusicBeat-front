import React from 'react'
import arrow from '../../images/arrow-black.png'
import Slider from "react-slick";
import right from '../../images/right.png'
import left from '../../images/left.png'
import tame from '../../images/tame.png'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        src={right}
        onClick={onClick}
        
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
      className={className}
      src={left}
      onClick={onClick}
      />
    );
  }
  
const TopCharts = () => {
    
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
          ]
      };
  return (
    <section className="security_section layout_padding">
    <h3>
      Hot Topic


    </h3>
    <h2>
      This week's chrats
    </h2>
   
       
        <Slider {...settings}>
        <div class="item">
            <div class="security_img-box i-box-1">
              <a href=""> View More</a>
            </div>
          </div>
          <div class="item">
            <div class="security_img-box i-box-2">
              <a href=""> View More</a>
            </div>
          </div>
          <div class="item">
            <div class="security_img-box i-box-3">
              <a href=""> View More</a>
            </div>
          </div>
          <div class="item">
            <div class="security_img-box i-box-3">
              <a href=""> View More</a>
            </div>
          </div>
         
          
        </Slider>
      

    
  </section>
  )
}

export default TopCharts