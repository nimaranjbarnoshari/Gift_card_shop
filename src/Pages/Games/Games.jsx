import React, { useState, useContext, useEffect } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import AuthContext from "../../Context/AuthContext";
import GameBox from "../../Components/GameBox/GameBox";

import "./Games.css";
export default function Games() {
  const contextData = useContext(AuthContext);

  const [categoryName, setCategoryName] = useState("ps");
  const [categoryGames, setCategoryGames] = useState([]);

  const chooseCategory = () => {
    const games = contextData.allGamesData.filter(
      (game) => game.category === categoryName
    );
    setCategoryGames(games);
  };

  useEffect(() => {
    chooseCategory();
  }, []);

  useEffect(() => {
    chooseCategory();
  }, [categoryName]);

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
          <SectionHeader
            title={
              categoryName === "ps"
                ? "بازی های  پلی استیشن"
                : categoryName === "xbox"
                ? "بازی های ایکس باکس"
                : categoryName === "computer"
                ? "بازی های کامپیوتر"
                : categoryName === "nintendo"
                ? "بازی های نینتندو"
                : null
            }
          />

          <div className="games__box-container">
            {categoryGames.map((game) => (
              <GameBox
                key={game.id}
                custom="games__box-custom"
                title={game.title}
                src={game.src}
                off={game.off}
                price={game.price}
                clickHandler={() => contextData.addToBasket(game)}
              />
            ))}
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
