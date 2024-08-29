// src/VideoSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VideoSlider.css';


const Videoadd = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    
  };

  return (
    
    <div className="video-slider">
  
      <Slider {...settings }>
        <div>
          <video width="100%" controls="autoPlay">
            <source src="https://assets.mixkit.co/videos/4598/4598-720.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <video width="100%" controls="autoplay">
            <source src="https://assets.mixkit.co/videos/4531/4531-720.mp4" type="video/mp4"   />
          </video>
        </div>
        <div>
          <video width="100%" controls="autoplay">
            <source src="https://videos.pexels.com/video-files/5198159/5198159-hd_1280_720_50fps.mp4" type="video/mp4"   />
          </video>
        </div>
        <div>
          <video width="100%" controls="autoplay">
            <source src="https://videos.pexels.com/video-files/7729830/7729830-hd_1280_720_25fps.mp4" type="video/mp4"   />
          </video>
        </div>
        <div>
          <video width="100%" controls="autoplay">
            <source src="https://videos.pexels.com/video-files/7603815/7603815-hd_1280_720_25fps.mp4" type="video/mp4"   />
          </video>
        </div>
         <div>
          <video width="100%" controls="autoplay">
            <source src="https://videos.pexels.com/video-files/5735221/5735221-hd_1280_720_30fps.mp4" type="video/mp4"   />
          </video>
        </div>
      
      </Slider>
    </div>
  );
};

export default Videoadd;
