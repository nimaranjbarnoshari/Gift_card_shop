import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import GameBox from "../GameBox/GameBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./GamesCategory.css";

export default function GamesCategory() {
  return (
    <div className="games-category">
      <div className="container">
        <SectionHeader title="دسته بندی بازی ها" />
        {/* buttons */}
        <div className="games-category__buttons-wrapper">
          <button className="games-category__button games-category__button--active">
            <img
              src="/images/svg/PlayStation.svg"
              alt="svg"
              className="games-category__button-icon"
            />
            <span className="games-category__button-text">
              بازی های پلی استیشن
            </span>
          </button>

          <button className="games-category__button">
            <img
              src="/images/svg/Xbox.svg"
              alt="svg"
              className="games-category__button-icon"
            />
            <span className="games-category__button-text">
              بازی های ایکس باکس
            </span>
          </button>

          <button className="games-category__button">
            <img
              src="/images/svg/mouse.svg"
              alt="svg"
              className="games-category__button-icon"
            />
            <span className="games-category__button-text">
              بازی های کامپیوتر
            </span>
          </button>

          <button className="games-category__button">
            <img
              src="/images/svg/Nintendo.svg"
              alt="svg"
              className="games-category__button-icon"
            />
            <span className="games-category__button-text">
              بازی های نینتندو
            </span>
          </button>
        </div>
        {/* games boxes */}
      </div>
      <div className="games-category__boxes-wrapper">
        <div className="container">
          <Swiper
            // autoplay={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <GameBox
                src="/images/home/fifa24.jpg"
                title="بازی فیفا ۲۴ (پیش خرید)"
                price="۲۵۶،۰۰۰"
                offPrice="۲۴۳،۲۰۰"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GameBox
                src="/images/home/jedi.jpg"
                title="بازی JEDI Survivor"
                price="۱،۱۸۰،۰۰۰"
                offPrice="۱،۱۳۳،۰۰۰"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GameBox
                src="/images/home/deadspace.jpg"
                title="بازی Dead Space"
                price="۶،۴۹۰،۰۰۰"
                offPrice="۶،۳۶۰،۰۰۰"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GameBox
                src="/images/home/warfar.jpg"
                title="بازی Modern Warfare 2"
                price="۳،۲۴۵،۰۰۰"
                offPrice="۳،۱۴۸،۰۰۰"
              />
            </SwiperSlide>
          </Swiper>
          <button className="games-category__boxes-button">نمایش بیشتر</button>
        </div>
      </div>
    </div>
  );
}
