import React, { useEffect, useState, useContext } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import GameBox from "../GameBox/GameBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AuthContext from "../../Context/AuthContext";
import { ImSad } from "react-icons/im";

import "swiper/css";
import "swiper/css/pagination";
import "./DiscountedProducts.css";

export default function DiscountedProducts() {
  const contextData = useContext(AuthContext);
  const [discountProducts, setDiscountProducts] = useState([]);
  const [isActive, setIsActive] = useState("gifts");

  const fetchData = (product) => {
    fetch(`http://localhost:8000/${product}`)
      .then((res) => res.json())
      .then((datas) => {
        if (product === "gifts") {
          const discountedGifts = [];
          datas.forEach((data) => {
            data.giftCards.forEach((eachData) => {
              if (eachData.off) {
                discountedGifts.push(eachData);
              }
            });
          });
          setDiscountProducts(discountedGifts);
        } else {
          const discountedProducts = datas.filter((data) => data.off !== 0);
          setDiscountProducts(discountedProducts);
        }
      });
  };
  useEffect(() => {
    fetchData("gifts");
  }, []);

  const giftDiscount = () => {
    fetchData("gifts");
    setIsActive("gifts");
  };
  const gameDiscount = () => {
    fetchData("games");
    setIsActive("games");
  };
  const moneyDiscount = () => {
    fetchData("money");
    setIsActive("money");
  };
  const serviceDiscount = () => {
    fetchData("services");
    setIsActive("services");
  };
  const softwareDiscount = () => {
    fetchData("softwares");
    setIsActive("softwares");
  };
  const digitDiscount = () => {
    fetchData("digits");
    setIsActive("digits");
  };

  return (
    <div className="discounted-products">
      <div className="container">
        <SectionHeader title="محصولات تخفیف دار" off={true} />

        {/* buttons */}
        <div className="discounted-products__buttons-wrapper">
          <button
            className={
              isActive === "gifts"
                ? "discounted-products__button discounted-products__button--active"
                : "discounted-products__button"
            }
            onClick={giftDiscount}
          >
            گیفت کارت
          </button>
          <button
            className={
              isActive === "games"
                ? "discounted-products__button discounted-products__button--active"
                : "discounted-products__button"
            }
            onClick={gameDiscount}
          >
            بازی ها
          </button>
          <button
            className={
              isActive === "money"
                ? "discounted-products__button discounted-products__button--active"
                : "discounted-products__button"
            }
            onClick={moneyDiscount}
          >
            پول وآیتم بازی
          </button>
          <button
            className={
              isActive === "services"
                ? "discounted-products__button discounted-products__button--active"
                : "discounted-products__button"
            }
            onClick={serviceDiscount}
          >
            خدمات
          </button>
          <button
            className={
              isActive === "softwares"
                ? "discounted-products__button discounted-products__button--active"
                : "discounted-products__button"
            }
            onClick={softwareDiscount}
          >
            نرم افزار
          </button>
          <button
            className={
              isActive === "digits"
                ? "discounted-products__button discounted-products__button--active"
                : "discounted-products__button"
            }
            onClick={digitDiscount}
          >
            کالای دیجیتال
          </button>
        </div>

        {/* games boxes */}
        <div className="discounted-products__boxes">
          <Swiper
            // autoplay={true}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
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
            {discountProducts.length ? (
              discountProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <GameBox
                    src={product.src}
                    link={product.link ? product.link : "#"}
                    title={product.title}
                    price={product.price}
                    off={product.off}
                    clickHandler={() => contextData.addToBasket(product)}
                  />
                </SwiperSlide>
              ))
            ) : (
              <div className="games-category__empty">
                <h4 className="games-category__empty-text">
                  متاسفانه در این دسته بندی محصول تخفیف دار وجود ندارد
                </h4>
                <ImSad className="games-category__empty-icon" />
              </div>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
