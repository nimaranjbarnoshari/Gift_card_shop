import React, { useContext } from "react";
import Flag from "../Flag/Flag";
import PriceBox from "../PriceBox/PriceBox";
import BasketButtons from "../BasketButtons/BasketButtons";
import { MdDeleteForever } from "react-icons/md";
import AuthContext from "../../Context/AuthContext";
import "./BasketCard.css";
export default function BasketCard({
  cardSrc,
  title,
  flagSrc,
  price,
  count,
  country,
  productID,
}) {
  const contextData = useContext(AuthContext);
  return (
    <div className="basket-card">
      <div className="basket-card-right">
        <MdDeleteForever
          className="basket-card__delete-icon"
          onClick={() => contextData.removeFromBasket(productID, title)}
        />
        <div className="basket-card__icon-container">
          <img src={cardSrc} alt="apple" className="basket-card__img" />
        </div>
        <div className="basket-card__infos">
          <div className="basket-card__title">{title}</div>
          {flagSrc ? <Flag country={country} src={flagSrc} /> : ""}
        </div>
      </div>
      <div className="basket-card-left">
        <div className="basket-card__buttons">
          <BasketButtons count={count} productID={productID} />
        </div>
        <div className="basket-card__price-container">
          <PriceBox price={price.toLocaleString()} />
        </div>
      </div>
    </div>
  );
}
