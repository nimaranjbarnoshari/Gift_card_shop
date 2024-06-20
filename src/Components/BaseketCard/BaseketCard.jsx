import React from "react";
import "./BaseketCard.css";
export default function BaseketCard({cardSrc, flagSrc}) {
  return (
    <div className="basket-card">
      <div className="basket-card-right">
        <div className="basket-card__icon-container">
          <img
            src={cardSrc}
            alt="apple"
            className="basket-card__icon"
          />
        </div>
        <div className="basket-card__infos">
          <div className="basket-card__title">گیفت کارت 20 دلاری اپل</div>
          <div className="basket-card__country">
            <img
              src={flagSrc}
              alt="usa"
              className="basket-card__country-img"
            />
            <span className="basket-card__country-name">آمریکا</span>
          </div>
        </div>
      </div>
      <div className="basket-card-left">
        <div className="basket-card__buttons">
          <button className="basket-card__button">+</button>
          <span className="basket-card__count">۲</span>
          <button className="basket-card__button">-</button>
        </div>
        <div className="basket-card__price-container">
          <span className="basket-card__unit">تومان</span>
          <span className="basket-card__price">۲۵۶،۰۰۰</span>
        </div>
      </div>
    </div>
  );
}
