import React, { Component } from "react";
import Slider from "react-slick";

export default class Slider_backboard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="slider_background p-4">
        <Slider {...settings}>
          
          <div>
          <img src="image1.png" alt="product_card" className="product_card" />
          </div>
          <div>
          <img src="image3.png" alt="product_card" className="product_card" />
          </div>
          <div>
          <img src="image4.png" alt="product_card" className="product_card" />
          </div>
          <div>
          <img src="image5.png" alt="product_card" className="product_card" />
          </div>
          <div>
          <img src="image7.png" alt="product_card" className="product_card" />
          </div>
          <div>
          <img src="image8.png" alt="product_card" className="product_card" />
          </div>
          <div>
          <img src="image9.png" alt="product_card" className="product_card" />
          </div>
          <div>
          <img src="image10.png" alt="product_card" className="product_card" />
          </div>
        </Slider>
      </div>
    );
  }
}