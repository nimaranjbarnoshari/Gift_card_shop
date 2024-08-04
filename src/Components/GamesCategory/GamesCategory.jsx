import React, { useEffect, useState, useContext } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import GameBox from "../GameBox/GameBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import AuthContext from "../../Context/AuthContext";


import "swiper/css";
import "swiper/css/navigation";
import "./GamesCategory.css";

export default function GamesCategory() {
 
  const contextData = useContext(AuthContext);
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then((res) => res.json())
      .then((data) => setGamesData(data));
  }, []);
  

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
            {gamesData.map((game) => (
              <SwiperSlide key={game.id}>
                <GameBox
                  clickHandler={() => contextData.addToBasket(gamesData,game.id)}
                  src={game.src}
                  title={game.title}
                  price={game.price.toLocaleString()}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="games-category__boxes-button">نمایش بیشتر</button>
        </div>
      </div>
    </div>
  );
}
