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
  const [allGamesData, setAllGamesData] = useState([]);
  const [gamesData, setGamesData] = useState([]);
  const [isActive, setIsActive] = useState("1");

  const setData = (data, filterKry) => {
    const category = data.filter((game) => game.category === filterKry);
    return category;
  };

  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then((res) => res.json())
      .then((data) => setAllGamesData(data));
  }, []);

  useEffect(() => {
    const psGames = setData(allGamesData, "ps");
    setGamesData(psGames);
  }, [allGamesData]);

  const psGamesHandler = () => {
    const psGames = setData(allGamesData, "ps");
    setGamesData(psGames);
    setIsActive("1");
  };

  const xboxGamesHandler = () => {
    const xboxGames = setData(allGamesData, "xbox");
    setGamesData(xboxGames);
    setIsActive("2");
  };

  const computerGamesHandler = () => {
    const computerGames = setData(allGamesData, "computer");
    setGamesData(computerGames);
    setIsActive("3");
  };

  const nintendoGamesHandler = () => {
    const nintendoGames = setData(allGamesData, "nintendo");
    setGamesData(nintendoGames);
    setIsActive("4");
  };

  return (
    <div className="games-category">
      <div className="container">
        <SectionHeader title="دسته بندی بازی ها" />
        {/* buttons */}
        <div className="games-category__buttons-wrapper">
          <button
            className={
              isActive === "1"
                ? "games-category__button games-category__button--active"
                : "games-category__button"
            }
            onClick={psGamesHandler}
            id="1"
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
              isActive === "2"
                ? "games-category__button games-category__button--active"
                : "games-category__button"
            }
            onClick={xboxGamesHandler}
            id="2"
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
              isActive === "3"
                ? "games-category__button games-category__button--active"
                : "games-category__button"
            }
            onClick={computerGamesHandler}
            id="3"
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
              isActive === "4"
                ? "games-category__button games-category__button--active"
                : "games-category__button"
            }
            onClick={nintendoGamesHandler}
            id="4"
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
                    clickHandler={() =>
                      contextData.addToBasket(gamesData, game.id)
                    }
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
