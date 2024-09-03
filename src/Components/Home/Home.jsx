import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { PiTag } from "react-icons/pi";
import "./Home.css";


export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home-row">
          <div className="home-slider__wrapper">
            <Swiper
              // autoplay={true}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              loop={true}
            >
              <SwiperSlide>
                <img
                  src="/images/home/home.jpg"
                  alt="slider_image"
                  className="home-slider__img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/home/fifa.jpg"
                  alt="slider_image"
                  className="home-slider__img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/home/CallOf.jpg"
                  alt="slider_image"
                  className="home-slider__img"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="home-cards__wrapper">
            <div className="home-cards__header">
              <PiTag className="home-cards__header-icon" />
              <h2 className="home-cards__header-title">
                پرفروش ترین های این هفته
              </h2>
            </div>

            <div className="row home-card">
              <div className="col-3 home-card__img-wrapper">
                <img
                  src="/images/home/steam.jpg"
                  alt="homecardImage"
                  className="home-card__img"
                />
              </div>
              <div className="col-9">
                <div className="home-card__header">
                  <h4 className="home-card__title">گیف کارت استیم 5 دلاری</h4>
                  <span className="home-card__off">۵٪ تخفیف</span>
                </div>
                <p className="home-card__price">
                  ۱۲۵،۰۰۰ <span className="home-card__price--unit">تومان</span>
                </p>
              </div>
            </div>

            <div className="row home-card">
              <div className="col-3 home-card__img-wrapper">
                <img
                  src="/images/home/google_play.jpg"
                  alt="homecardImage"
                  className="home-card__img"
                />
              </div>
              <div className="col-9">
                <div className="home-card__header">
                  <h4 className="home-card__title">
                    گیف کارت گوگل پلی استور 10 دلاری
                  </h4>
                </div>
                <p className="home-card__price">
                  ۱۲۵،۰۰۰ <span className="home-card__price--unit">تومان</span>
                </p>
              </div>
            </div>

            <div className="row home-card">
              <div className="col-3 home-card__img-wrapper">
                <img
                  src="/images/home/apple.jpg"
                  alt="homecardImage"
                  className="home-card__img"
                />
              </div>
              <div className="col-9">
                <div className="home-card__header">
                  <h4 className="home-card__title">
                    گیف کارت اپل استور 100 دلاری
                  </h4>
                  <span className="home-card__off">۵٪ تخفیف</span>
                </div>
                <p className="home-card__price">
                  ۲،۱۲۵،۰۰۰{" "}
                  <span className="home-card__price--unit">تومان</span>
                </p>
              </div>
            </div>

            <div className="row home-card">
              <div className="col-3 home-card__img-wrapper">
                <img
                  src="/images/home/amazon.jpg"
                  alt="homecardImage"
                  className="home-card__img"
                />
              </div>
              <div className="col-9">
                <div className="home-card__header">
                  <h4 className="home-card__title">گیف کارت آمازون 10 دلاری</h4>
                  <span className="home-card__off force-background">
                    تحویل فوری
                  </span>
                </div>
                <p className="home-card__price">
                  ۱۲۵،۰۰۰ <span className="home-card__price--unit">تومان</span>
                </p>
              </div>
            </div>

            <div className="row home-card">
              <div className="col-3 home-card__img-wrapper">
                <img
                  src="/images/home/playstation.jpg"
                  alt="homecardImage"
                  className="home-card__img"
                />
              </div>
              <div className="col-9">
                <div className="home-card__header">
                  <h4 className="home-card__title">
                    گیف کارت پلی استیشن 100 دلاری
                  </h4>
                </div>
                <p className="home-card__price">
                  ۲،۱۲۵،۰۰۰{" "}
                  <span className="home-card__price--unit">تومان</span>
                </p>
              </div>
            </div>

            <div className="row home-card">
              <div className="col-3 home-card__img-wrapper">
                <img
                  src="/images/home/xbox.jpg"
                  alt="homecardImage"
                  className="home-card__img"
                />
              </div>
              <div className="col-9">
                <div className="home-card__header">
                  <h4 className="home-card__title">
                    گیف کارت ایکس باکس 100 دلاری
                  </h4>
                </div>
                <p className="home-card__price">
                  ۲،۱۲۵،۰۰۰{" "}
                  <span className="home-card__price--unit">تومان</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
