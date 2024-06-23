import React from "react";
import Flag from "../Flag/Flag";

import "./GiftBox.css";
import PriceBox from "../PriceBox/PriceBox";

export default function GiftBox({ flagSrc, country, title, src, price }) {
  return (
    <div className="gift-box">
      <div className="gift-box__header">
        <Flag src={flagSrc} country={country} />
      </div>
      <div className="gift-box__body">
        <img src={src} alt="apple" className="gift-box__body-icon" />
        <h3 className="gift-box__body-title">{title}</h3>
        <PriceBox price="۲۵۶،۰۰۰"/>
        <button className="gift-box__body-buuton">انتخاب محصول</button>
      </div>
    </div>
  );
}
