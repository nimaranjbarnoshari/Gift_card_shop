import React from "react";

import "./GiftCards.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import Benefits from "../../Components/Benefits/Benefits";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import GameBox from "../../Components/GameBox/GameBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function GiftCards() {
  return (
    <>
      <Topbar />
      <Navbar />
      
      <Benefits />
      <div className="container">
        <div className="gift-products">
          <SectionHeader title="دیگر محصولات"/>
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
              />
            </SwiperSlide>

            <SwiperSlide>
              <GameBox
               src="/images/home/jedi.jpg"
               title="بازی JEDI Survivor"
               price="۱،۱۸۰،۰۰۰"
              />
            </SwiperSlide>

            <SwiperSlide>
              <GameBox
                src="/images/home/deadspace.jpg"
                title="بازی Dead Space"
                price="۶،۴۹۰،۰۰۰"
              />
            </SwiperSlide>

            <SwiperSlide>
              <GameBox
                src="/images/home/warfar.jpg"
                title="بازی Modern Warfare 2"
                price="۳،۲۴۵،۰۰۰"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
