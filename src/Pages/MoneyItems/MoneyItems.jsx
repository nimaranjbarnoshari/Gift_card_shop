import React, { useContext } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import GameBox from "../../Components/GameBox/GameBox";
import AuthContext from "../../Context/AuthContext";
import Benefits from "../../Components/Benefits/Benefits";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./MoneyItems.css";

export default function Digits() {
  const contextData = useContext(AuthContext);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <SectionHeader title="پول و آیتم بازی" custom="accessory-header" />

        <div className="games__box-container">
          {contextData.allMoney.map((money) => (
            <GameBox
              key={money.id}
              custom="games__box-custom"
              link={money.link ? money.link : null}
              title={money.title}
              src={money.src}
              off={money.off}
              price={money.price}
              clickHandler={() => contextData.addToBasket(money)}
            />
          ))}
        </div>
      </div>

      <Benefits background={false} custom="games__benefits" />

      <div className="container">
        <div className="gift-cards__other-products">
          <SectionHeader title="دیگر محصولات" />
          <Swiper
            modules={[Pagination, Autoplay]}
            // autoplay={true}
            pagination={{ type: "bullets", clickable: true }}
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
            {contextData.allAccessories?.length
              ? contextData.allAccessories.slice(0, 8).map((game) => (
                  <SwiperSlide key={game.id}>
                    <GameBox
                      custom="discounted-products__custom-box"
                      clickHandler={() => contextData.addToBasket(game)}
                      src={game.src}
                      title={game.title}
                      price={game.price}
                      off={game.off}
                      link={game.link}
                    />
                  </SwiperSlide>
                ))
              : ""}
          </Swiper>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
