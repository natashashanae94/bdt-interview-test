

import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#3399E1", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#3399E1", fontSize: "50px", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <>
        <div className="border-b-2 mb-20 mx-auto w-9/10"> 
          <div className="my-20 lg:w-9/12 w-10/12 mx-auto">
            <h1 className="lg:text-5xl text-3xl font-bold text-blue-700">Our Impact, Their Words</h1>

            <Slider {...settings}>
              <div className="p-10">
                <p>I need my benefits and I tried to do it on my own, but I recently had a stroke, and I couldn't figure it out.  I was referred to you...without your help I would be lost.</p>
                <p className="font-bold mt-4">John</p>
                <p>Age 67, New York</p>
              </div>
              <div className="p-10">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="font-bold mt-4">Maisie</p>
                <p>Age 25, New York</p>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
