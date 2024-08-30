import React from "react";
import "./GameBox.css";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import PN from "persian-number";
import { Link } from "react-router-dom";

export default function GameBox({
  src,
  off,
  title,
  price,
  clickHandler,
  link,
}) {
  return (
    <div className="game-box">
      <Link to={link ? link : "#"}>
        <img src={src} alt="box_img" className="game-box__img" />
      </Link>
      <Link to={link ? link : "#"} className="game-box__link">
        <h3 className="game-box__title">{title}</h3>
      </Link>
      {off ? (
        <p className="game-box__last-price">
          <span>تومان</span> {PN.convertEnToPe(price.toLocaleString())}
        </p>
      ) : (
        <p className="game-box__last-price--hiden">hidden</p>
      )}
      <div className="game-box__price-wrapper">
        {off ? (
          <span className="game-box__off">{PN.convertEnToPe(off)}٪ تخفیف</span>
        ) : (
          ""
        )}
        <p className="game-box__price">
          {off ? (
            <>
              <span>تومان</span>{" "}
              {PN.convertEnToPe((price - (price * off) / 100).toLocaleString())}
            </>
          ) : (
            <>
              <span>تومان</span> {PN.convertEnToPe(price.toLocaleString())}
            </>
          )}
        </p>
      </div>
      <button className="game-box__button" onClick={clickHandler}>
        <HiOutlineShoppingCart className="game-box__button-icon" />
        <span className="game-box__button-text">افزودن به سبد خرید</span>
      </button>
    </div>
  );
}
