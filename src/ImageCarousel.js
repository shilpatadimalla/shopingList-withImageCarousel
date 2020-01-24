import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function ImageCarousel(props) {
  return (
    props.display ? 
    <Carousel >
      {props.images.map((i, index) => (
        <a href={i.href} >
        <img
          className="d-block w-100"
          src={i.href}
          //width={i.width} 
          //height={i.height}
          alt={i.rel}
          dataKeyboard="true"
        />
        </a>
      ))}
    </Carousel>
    : 
    null
  );
}

export default ImageCarousel;
