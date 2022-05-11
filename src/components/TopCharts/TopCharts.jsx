import React, { useEffect ,useState} from 'react'
import arrow from '../../images/arrow-black.png'
import Slider from "react-slick";
import right from '../../images/right.png'
import left from '../../images/left.png'
import tame from '../../images/tame.png'
import { getCategories } from '../../service/musicService';
import { Link } from 'react-router-dom';
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
  const [categories,setCategories]=useState()

  useEffect(()=>{
    getCategories().then((res)=>{
      setCategories(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
    
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                slidesToShow: 2,
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
      {categories?.map((d)=>{
          return (
            <div key={d.mainCategoryId}>
    <h3 style={{marginBottom:"20px"}}>
    {d.mainCategoryName}


    </h3>
    
   
       
        <Slider {...settings}>
        {d.categoryList.map((d)=>{
          return (
            
            <Link to={`/playlist/${d.categoryId}`}>
          <div class="item">
            <img src={d.categoryImg} />
          </div>
          </Link>
          )
        })}
          
        </Slider>
        </div>
        )
        })}
      

    
  </section>
  )
}

export default TopCharts