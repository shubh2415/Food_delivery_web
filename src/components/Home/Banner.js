import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerCarousel = () => {
  return (
    <>
      <style>
        {`
          .carousel-container {
            width: 100vw;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }

          .carousel-container img {
            height: 400px;
            object-fit: cover;
            width: 100vw;
          }
        `}
      </style>
      <div className="carousel-container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src="/images/banner1.jpg" alt="Banner 1" />
          </div>
          <div>
            <img src="/images/banner2.jpg" alt="Banner 2" />
          </div>
          <div>
            <img src="/images/banner3.jpg" alt="Banner 3" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default BannerCarousel;
