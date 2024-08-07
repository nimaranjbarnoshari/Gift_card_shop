import React from "react";
import Flag from "../Flag/Flag";
import PriceBox from "../PriceBox/PriceBox";
import BasketButtons from "../BasketButtons/BasketButtons";
import "./BasketCard.css";
export default function BasketCard({ cardSrc, flagSrc, price, count }) {
  return (
    <div className="basket-card">
      <div className="basket-card-right">
        <div className="basket-card__icon-container">
          <img src={cardSrc} alt="apple" className="basket-card__icon" />
        </div>
        <div className="basket-card__infos">
          <div className="basket-card__title">گیفت کارت 20 دلاری اپل</div>
          <Flag country="آمریکا" src={flagSrc} />
        </div>
      </div>
      <div className="basket-card-left">
        <div className="basket-card__buttons">
          <BasketButtons count={count} />
        </div>
        <div className="basket-card__price-container">
          <PriceBox price={price} />
        </div>
      </div>
    </div>
  );
}
