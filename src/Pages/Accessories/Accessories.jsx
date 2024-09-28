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
import "./Accessories.css";

export default function Digits() {
  const contextData = useContext(AuthContext);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <SectionHeader title="دسته بازی" custom="accessory-header" />

        <div className="games__box-container">
          {contextData.allAccessories
            .filter((accessory) => accessory.category === "joystick")
            .map((accessory) => (
              <GameBox
                key={accessory.id}
                custom="games__box-custom"
                link={accessory.link ? accessory.link : null}
                title={accessory.title}
                src={accessory.src}
                off={accessory.off}
                price={accessory.price}
                clickHandler={() => contextData.addToBasket(accessory)}
              />
            ))}
        </div>

        <SectionHeader title="مانیتور" custom="accessory-header" />

        <div className="games__box-container">
          {contextData.allAccessories
            .filter((accessory) => accessory.category === "monitor")
            .map((accessory) => (
              <GameBox
                key={accessory.id}
                custom="games__box-custom"
                link={accessory.link ? accessory.link : null}
                title={accessory.title}
                src={accessory.src}
                off={accessory.off}
                price={accessory.price}
                clickHandler={() => contextData.addToBasket(accessory)}
              />
            ))}
        </div>

        <SectionHeader title="هدست" custom="accessory-header" />

        <div className="games__box-container">
          {contextData.allAccessories
            .filter((accessory) => accessory.category === "headset")
            .map((accessory) => (
              <GameBox
                key={accessory.id}
                custom="games__box-custom"
                link={accessory.link ? accessory.link : null}
                title={accessory.title}
                src={accessory.src}
                off={accessory.off}
                price={accessory.price}
                clickHandler={() => contextData.addToBasket(accessory)}
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
            {contextData.allGamesData?.length
              ? contextData.allGamesData.slice(0, 8).map((game) => (
                  <SwiperSlide key={game.id}>
                    <GameBox
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
