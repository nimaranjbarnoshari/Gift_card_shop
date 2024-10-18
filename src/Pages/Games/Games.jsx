import React, { useState, useContext, useEffect } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import AuthContext from "../../Context/AuthContext";
import GameBox from "../../Components/GameBox/GameBox";
import Benefits from "../../Components/Benefits/Benefits";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Games.css";
export default function Games() {
  const contextData = useContext(AuthContext);
  const [categoryName, setCategoryName] = useState("all");
  const [categoryGames, setCategoryGames] = useState([]);

  const chooseCategory = () => {
    if (categoryName === "all") {
      setCategoryGames(contextData.allGamesData);
    } else {
      const games = contextData.allGamesData.filter(
        (game) => game.category === categoryName
      );
      setCategoryGames(games);
    }
  };

  useEffect(() => {
    chooseCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, contextData.allGamesData]);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="games">
        <div className="container">
          <div className="games__category">
            <label htmlFor="gamesCategory" className="games__category-label">
              انتخاب دسته بندی :
            </label>
            <select
              name=""
              id="gamesCategory"
              className="games__category-select"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            >
              <option value="all" className="games__category-option">
                همه بازی ها
              </option>
              <option value="ps" className="games__category-option">
                بازی های پلی استیشن
              </option>
              <option value="xbox" className="games__category-option">
                بازی های ایکس باکس
              </option>
              <option value="computer" className="games__category-option">
                بازی های کامپیوتر
              </option>
              <option value="nintendo" className="games__category-option">
                بازی های نینتندو
              </option>
            </select>
          </div>
     

          <div className="games__box-container">
            {categoryGames.map((game) => (
              <GameBox
                key={game.id}
                custom="games__box-custom"
                link={game.link ? game.link : null}
                title={game.title}
                src={game.src}
                off={game.off}
                price={game.price}
                clickHandler={() => contextData.addToBasket(game)}
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
              autoplay={true}
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
              {contextData.allGifts?.length
                ? contextData.allGifts.map((game) => (
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
      </div>
      <Socials />
      <Footer />
    </>
  );
}
