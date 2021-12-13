import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../asset/img/slider1.jpeg";
import slide2 from "../asset/img/slider2.jpg";
import slide3 from "../asset/img/slider3.jpg";
import slide4 from "../asset/img/slider4.jpg";

export default class Sliders extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slider">
            <img src={slide1} alt="" className="slider_slicks" />
          </div>
          <div className="slider">
            <img src={slide2} alt="" className="slider_slicks" />
          </div>
          <div className="slider">
            <img src={slide3} alt="" className="slider_slicks" />
          </div>
          <div className="slider">
            <img src={slide4} alt="" className="slider_slicks" />
          </div>
        </Slider>
      </div>
    );
  }
}
