import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img3 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className='services'>
        <Carousel
        infiniteLoop
        autoPlay showStatus={false} showArrows={false}
        interval={1000}
        showIndicators={false}
        showThumbs={false}>
            <div>
                <img src={img1} alt="Item1" />
                <p>Full Stack</p>
            </div>
            <div>
                <img src={img3} alt="Item2" />
                <p>Mern Stack</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services