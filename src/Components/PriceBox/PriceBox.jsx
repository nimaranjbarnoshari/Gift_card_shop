import React from "react";
import "./PriceBox.css";
export default function PriceBox({ price, isTotal }) {
  return (
    <div className={`price-box ${isTotal ? "total-price": ""}`}>
      <span className="price-box__unit">تومان</span>
      <span className="price-box__price">{price}</span>
    </div>
  );
}
