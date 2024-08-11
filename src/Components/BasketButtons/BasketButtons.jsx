import React, { useContext } from "react";
import PN from "persian-number";
import AuthContext from "../../Context/AuthContext";
import "./BasketButtons.css";
export default function BasketButtons({ count, productID }) {
  const contextData = useContext(AuthContext);
  return (
    <div className="basket-buttons">
      <button
        className="basket-button"
        onClick={() => {
          contextData.addCount(productID);
        }}
      >
        +
      </button>
      <span className="basket-count">{PN.convertEnToPe(count)}</span>
      <button
        className="basket-button"
        onClick={() => {
          contextData.minusCount(productID);
        }}
        disabled={count <= 1 ? true : false}
      >
        -
      </button>
    </div>
  );
}
