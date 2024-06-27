import React from "react";
import "./OrderBox.css";
export default function OrderBox({ src, title, desc, custom }) {
  return (
    <div className={`order-box ${custom ? custom : ""}`}>
      <div className="order-box__icon-container">
        <img src={src} alt="icon" className="order-box__icon" />
      </div>
      <div className="order-box__infos">
        <h4 className="order-box__infos-tilte">{title}</h4>
        <p className="order-box__infos-desc">{desc}</p>
      </div>
    </div>
  );
}
