import React from "react";
import "./AccountBox.css";
import { SlArrowLeft } from "react-icons/sl";

export default function AccountBox({ src, title, desc, svg }) {
  return (
    <div className="account-box">
      <div className="account-box__img-wrapper">
        <img
          src={src}
          alt=""
          className={`account-box-img ${svg ? "account-box__svg" : ""}`}
        />
      </div>
      <div className="account-box__info-wrapper">
        <h4 className="account-box__info-title">{title}</h4>
        <div className="account-box__info-desc">{desc}</div>
      </div>
      <div className="account-box__icon-wrapper">
        <SlArrowLeft className="account-box__icon" />
      </div>
    </div>
  );
}
