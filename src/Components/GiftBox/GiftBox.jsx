import React from "react";
import Flag from "../Flag/Flag";

import "./GiftBox.css";

export default function GiftBox({flagSrc, country,title, src, price}) {
  return (
    <div className="gift-box">
      <div className="gift-box__header">
        <Flag src={flagSrc} country={country} />
      </div>
      <div className="gift-box__body">
        <img
          src={src}
          alt="apple"
          className="gift-box__body-icon"
        />
        <h3 className="gift-box__body-title">{title}</h3>
        <div className="gift-box__price-container">
          <span className="gift-box__unit">تومان</span>
          <span className="gift-box__price">{price}</span>
        </div>
        <button className="gift-box__body-buuton">انتخاب محصول</button>
      </div>
    </div>
  );
}
