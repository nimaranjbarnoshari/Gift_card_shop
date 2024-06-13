import React from "react";
import "./DiscountedProducts.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import GameBox from "../GameBox/GameBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function DiscountedProducts() {
  return (
    <div className="discounted-products">
      <div className="container">
        <SectionHeader title="محصولات تخفیف دار" off={true} />

        {/* buttons */}
        <div className="discounted-products__buttons-wrapper">
          <button className="discounted-products__button discounted-products__button--active">
            گیفت کارت
          </button>
          <button className="discounted-products__button">بازی ها</button>
          <button className="discounted-products__button">
            پول وآیتم بازی
          </button>
          <button className="discounted-products__button">خدمات</button>
          <button className="discounted-products__button">نرم افزار</button>
          <button className="discounted-products__button">کالای دیجیتال</button>
        </div>

        {/* boxes */}
        <div className="discounted-products__boxes">
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
                src="/images/home/steam.jpg"
                title="گیفت کارت استیم ۵ دلاری"
                price="۲۵۶،۰۰۰"
                off="۵"
                offPrice="۲۴۳،۲۰۰"
              />
            </SwiperSlide>

            <SwiperSlide>
              <GameBox
                src="/images/home/google_play.jpg"
                title="گیفت کارت گوگل پلی ۲۰ دلاری"
                price="۱،۱۸۰،۰۰۰"
                off="۴"
                offPrice="۱،۱۳۳،۰۰۰"
              />
            </SwiperSlide>

            <SwiperSlide>
              <GameBox
                src="/images/home/apple.jpg"
                title="گیفت کارت اپل ۱۰۰ دلاری"
                price="۶،۴۹۰،۰۰۰"
                off="۲"
                offPrice="۶،۳۶۰،۰۰۰"
              />
            </SwiperSlide>

            <SwiperSlide>
              <GameBox
                src="/images/home/amazon.jpg"
                title="گیفت کارت گوگل آمازون ۵۰ دلاری"
                price="۳،۲۴۵،۰۰۰"
                off="۳"
                offPrice="۳،۱۴۸،۰۰۰"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
