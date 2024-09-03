import React, { useEffect, useState, useContext } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import GameBox from "../GameBox/GameBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AuthContext from "../../Context/AuthContext";
import { ImSad } from "react-icons/im";

import "swiper/css";
import "swiper/css/pagination";
import "./GamesCategory.css";

export default function GamesCategory() {
  const contextData = useContext(AuthContext);
  const [allGamesData, setAllGamesData] = useState(
    contextData.allGamesData ? contextData.allGamesData : []
  );
  const [gamesData, setGamesData] = useState([]);
  const [isActive, setIsActive] = useState("ps");

  useEffect(() => {
    setAllGamesData(contextData.allGamesData);
  }, [contextData.allGamesData]);

  useEffect(() => {
    const psGames = contextData.setData(allGamesData, "ps");
    setGamesData(psGames);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allGamesData]);

  function psGamesHandler() {
    const psGames = contextData.setData(allGamesData, "ps");
    setGamesData(psGames);
    setIsActive("ps");
  }

  const xboxGamesHandler = () => {
    const xboxGames = contextData.setData(allGamesData, "xbox");
    setGamesData(xboxGames);
    setIsActive("xbox");
  };

  const computerGamesHandler = () => {
    const computerGames = contextData.setData(allGamesData, "computer");
    setGamesData(computerGames);
    setIsActive("computer");
  };

  const nintendoGamesHandler = () => {
    const nintendoGames = contextData.setData(allGamesData, "nintendo");
    setGamesData(nintendoGames);
    setIsActive("nintendo");
  };

  return (
    <div className="games-category">
      <div className="container">
        <SectionHeader title="دسته بندی بازی ها" />
        {/* buttons */}
        <div className="games-category__buttons-wrapper">
          <button
            className={
              isActive === "ps"
                ? "games-category__button games-category__button--active"
                : "games-category__button"
            }
            onClick={psGamesHandler}
          >
            <img
              src="/images/svg/PlayStation.svg"
              alt="svg"
              className="games-category__button-icon"
            />
            <span className="games-category__button-text">
              بازی های پلی استیشن
            </span>
          </button>

          <button
            className={
              isActive === "xbox"
                ? "games-category__button games-category__button--active"
                : "games-category__button"
            }
            onClick={xboxGamesHandler}
          >
            <img
              src="/images/svg/Xbox.svg"
              alt="svg"
              className="games-category__button-icon"
            />
            <span className="games-category__button-text">
              بازی های ایکس باکس
            </span>
          </button>

          <button
            className={
              isActive === "computer"
                ? "games-category__button games-category__button--active"
                : "games-category__button"
            }
            onClick={computerGamesHandler}
          >
            <img
              src="/images/svg/mouse.svg"
              alt="svg"
              className="games-category__button-icon"
            />
            <span className="games-category__button-text">
              بازی های کامپیوتر
            </span>
          </button>

          <button
            className={
              isActive === "nintendo"
                ? "games-category__button games-category__button--active"
                : "games-category__button"
            }
            onClick={nintendoGamesHandler}
          >
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
            {gamesData.length ? (
              gamesData.map((game) => (
                <SwiperSlide key={game.id}>
                  <GameBox
                    clickHandler={() => contextData.addToBasket(game)}
                    src={game.src}
                    title={game.title}
                    price={game.price}
                    off={game.off}
                  />
                </SwiperSlide>
              ))
            ) : (
              <div className="games-category__empty">
                <h4 className="games-category__empty-text">
                  متاسفانه هیچ بازی در این دسته بندی وجود ندارد
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
