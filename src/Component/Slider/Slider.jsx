import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "./Slider.css";

const Slider = () => {
  const slideImages = [
    "https://t4.ftcdn.net/jpg/06/13/35/31/240_F_613353190_sozuPsAzQLmggUJfwiBRt0bTCqUnB1aL.jpg",
    "https://t4.ftcdn.net/jpg/00/95/11/47/240_F_95114739_nlxM48WSlHeLeR6ORivepbVTzyjgyxPb.jpg",
    "https://t3.ftcdn.net/jpg/06/13/02/92/240_F_613029262_nIrEZdHDTjlHjvbtetcZ7o5ZP0Nqv6sQ.jpg",
    "https://t3.ftcdn.net/jpg/06/84/13/88/240_F_684138844_6eNwg8IdZWmGYkyIKmsE8Lj0QcfU1TlP.jpg",
    "https://t4.ftcdn.net/jpg/06/88/20/13/240_F_688201384_vqVs1exkFaSin09EPHPrdG1FLJ1jgiZP.jpg",
    "https://t3.ftcdn.net/jpg/06/26/03/12/240_F_626031210_ZdDbsnsqTTjV9qRueIxtwlViuKbeFaEG.jpg",
    "https://t3.ftcdn.net/jpg/03/01/86/24/240_F_301862438_rXxpfbeJNBftrUtwFqPojMLkvBD4YODF.jpg",
  ];

  return (
    <div>
      <div className="container">
        <h1 className="heading">Flower Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`slide_image_${index + 1}`} />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
