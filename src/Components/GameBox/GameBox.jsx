import React from "react";
import "./GameBox.css";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import PN from "persian-number";

export default function GameBox({ src, off, title, price, clickHandler }) {
  return (
    <div className="game-box">
      <img src={src} alt="box_img" className="game-box__img" />
      <h3 className="game-box__title">{title}</h3>
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
              <span>تومان</span> {PN.convertEnToPe((price - (price * off / 100)).toLocaleString())}
            </>
          ) : (
            <>
              <span>تومان</span> {PN.convertEnToPe(price)}
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
