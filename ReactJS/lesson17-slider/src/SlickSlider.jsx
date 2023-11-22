import React from "react";
import Slider from "react-slick";
import photoOne from './img/C1.jpg';
import photoTwo from './img/C2.jpg';
import photoThree from './img/C3.jpg';
const SlickSlider=()=> {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
       <img width={200} src={photoOne} alt="" />
      </div>
      <div>
      <img width={200} src={photoTwo} alt="" />
      </div>
      <div>
      <img width={200} src={photoThree} alt="" />
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
      <img width={200} src={photoOne} alt="" />
      </div>
    </Slider>
  );
}

export default SlickSlider;