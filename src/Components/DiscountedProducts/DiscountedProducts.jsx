import React, { useEffect, useState, useContext } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import GameBox from "../GameBox/GameBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import AuthContext from "../../Context/AuthContext";

import "swiper/css";
import "swiper/css/navigation";
import "./DiscountedProducts.css";

export default function DiscountedProducts() {
  const contextData = useContext(AuthContext);
  const [allGifts, setAllGifts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/gifts")
      .then((res) => res.json())
      .then((data) => setAllGifts(data));
  }, []);
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

        {/* games boxes */}
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
            {allGifts.map((gift) => (
              <SwiperSlide>
                <GameBox
                  key={gift.id}
                  src={gift.src}
                  title={gift.title}
                  price={gift.price}
                  off={gift.off}
                  clickHandler={() =>
                    contextData.addToBasket(allGifts, gift.id)
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
