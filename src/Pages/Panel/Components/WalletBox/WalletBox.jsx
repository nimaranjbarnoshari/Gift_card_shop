import React from "react";
import "./WalletBox.css";
export default function WalletBox({ id, label, src }) {
  return (
    <div className="wallet-box">
      <div className="wallet-box__input">
          <input
            id={id}
            type="radio"
            className="wallet-box__input-radio"
            name="choose_bank"
          />
        <label htmlFor={id} className="wallet-box__input-label">
          {label}
        </label>
      </div>
      <img src={src} alt="bank" className="wallet-box__icon" />
    </div>
  );
}
