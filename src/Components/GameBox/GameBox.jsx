import React from "react";
import "./GameBox.css";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function GameBox(props) {
    
  return (
    <div className="game-box">
      <img
        src="/images/home/steam.jpg"
        alt="box_img"
        className="game-box__img"
      />
      <h3 className="game-box__title">{props.title}</h3>
      {props.off ? (
        <p className="game-box__last-price">
          <span>تومان</span> {props.price}
        </p>
      ) : (
        <p className="game-box__last-price--hiden">hidden</p>
      )}

      <div className="game-box__price-wrapper">
        {props.off ? <span className="game-box__off">۵٪ تخفیف</span> : ""}
        <p className="game-box__price">
          {props.off ? (
            <>
              <span>تومان</span> {props.offPrice}
            </>
          ) : (
            <>
              <span>تومان</span> {props.price}
            </>
          )}
        </p>
      </div>

      <button className="game-box__button">
        <HiOutlineShoppingCart className="game-box__button-icon" />
        <span className="game-box__button-text">افزودن به سبد خرید</span>
      </button>
    </div>
  );
}
