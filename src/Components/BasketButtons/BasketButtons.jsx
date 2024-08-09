import React from "react";
import PN from "persian-number";
import "./BasketButtons.css";
export default function BasketButtons({count}) {
  return (
    <div className="basket-buttons">
      <button className="basket-button">+</button>
      <span className="basket-count">{PN.convertEnToPe(count)}</span>
      <button className="basket-button">-</button>
    </div>
  );
}
