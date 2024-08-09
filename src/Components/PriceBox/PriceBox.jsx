import React from "react";
import PN from "persian-number";
import "./PriceBox.css";
export default function PriceBox({ price, isTotal, isBold, custom }) {
  return (
    <div
      className={`price-box ${isTotal ? "total-price" : ""} ${
        custom ? custom : ""
      }`}
    >
      <span className="price-box__unit">تومان</span>
      <span
        className={`price-box__price ${isBold ? "price-box__price-bold" : ""}`}
      >
        {PN.convertEnToPe(price)}
      </span>
    </div>
  );
}
