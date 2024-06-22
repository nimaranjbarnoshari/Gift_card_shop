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
import Flag from "../../Components/Flag/Flag";

export default function GiftCards() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        {/* Gifts and explanaions */}
        <div className="gift-cards__header-container">
          <div className="gift-cards__header">
            <div className="gift-cards__header-img-container">
              <div className="gift-cards__header-top-img-box">
                <img
                  src="/images/gifts/apple.jpg"
                  alt="giftCard"
                  className="gift-cards__header-top-img"
                />
              </div>
              <div className="gift-cards__header-bottom-img-container">
                <div className="gift-cards__header-bottom-img-box">
                  <img
                    className="gift-cards__header-bottom-img"
                    src="/images/gifts/apple1.jpg"
                    alt="gift-cards__header-bottom-img-container"
                  />
                </div>
                <div className="gift-cards__header-bottom-img-box">
                  <img
                    className="gift-cards__header-bottom-img"
                    src="/images/gifts/apple2.jpg"
                    alt="gift-cards__header-bottom-img-container"
                  />
                </div>
                <div className="gift-cards__header-bottom-img-box">
                  <img
                    className="gift-cards__header-bottom-img"
                    src="/images/gifts/apple3.jpg"
                    alt="gift-cards__header-bottom-img-container"
                  />
                </div>
              </div>
            </div>
            <div className="gift-cards__header-infos">
              <div className="gift-cards__header-infos-top">
                <h3 className="gift-cards__header-infos-top-title">
                  گیفت کارت اپل
                </h3>
                <Flag
                  title="دسته بندی: گیفت کارت اپل"
                  src="/images/svg/category.svg"
                />
              </div>
              <div className="gift-cards__header-infos-body">
                <h3 className="gift-cards__header-infos-body-title">
                  توضیحات کوتاه:
                </h3>
                <p className="gift-cards__header-infos-body-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
              <div className="gift-cards__header-infos-bottom">
                <h3 className="gift-cards__header-infos-bottom-title">
                  ویژگی ها:
                </h3>
                <div className="gift-cards__header-infos-bottom-flags">
                  <div className="gift-cards__header-infos-bottom-flags-container">
                    <img
                      src="/images/svg/region.svg"
                      alt="region"
                      className="gift-cards__header-infos-bottom-flags-icon"
                    />
                    <span className="gift-cards__header-infos-bottom-flags-title">
                      ریجن های موجود:
                    </span>
                  </div>
                  <div className="gift-cards__header-infos-bottom-flag-boxes">
                    <Flag country="برزیل" src="/images/svg/brazil.svg" />
                    <Flag country="انگلیس" src="/images/svg/england.svg" />
                    <Flag country="ترکیه" src="/images/svg/turkey.svg" />
                    <Flag country="فرانسه" src="/images/svg/france.svg" />
                    <Flag country="ایتالیا" src="/images/svg/italy.svg" />
                    <Flag country="آمریکا" src="/images/svg/usa.svg" />
                  </div>
                </div>
                <div className="gift-cards__header-infos-bottom-send">
                  <div className="gift-cards__header-infos-bottom-send-container">
                    <img
                      src="/images/svg/clock-w.svg"
                      alt="region"
                      className="gift-cards__header-infos-bottom-send-icon"
                    />
                    <span className="gift-cards__header-infos-bottom-send-title">
                      مدت زمان ارسال اکانت:
                    </span>
                  </div>
                  <span className="gift-cards__header-infos-bottom-send-text">
                    تا 24 ساعت بعد از ثبت سفارش
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="gift-cards__infos"></div>
        </div>

        {/* Choose gift card */}
        <div className="gift-cards__body"></div>

        {/* Pay & Help sections*/}
        <div className="gift-cards__footer">
          <div className="gift-cards__footer-pay"></div>
          <div className="gift-cards__footer-help"></div>
        </div>
      </div>
      <Benefits />
      {/* Other products section */}
      <div className="container">
        <div className="gift-products">
          <SectionHeader title="دیگر محصولات" />
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
