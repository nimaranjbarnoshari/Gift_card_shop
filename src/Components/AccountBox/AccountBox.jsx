import React from "react";
import "./AccountBox.css";
import { SlArrowLeft } from "react-icons/sl";

export default function AccountBox(props) {
  return (
    <div className="account-box">
      <div className="account-box__img-wrapper">
        <img src={props.src} alt="" className="account-box-img" />
      </div>
      <div className="account-box__info-wrapper">
        <h4 className="account-box__info-title">{props.title}</h4>
        <div className="account-box__info-desc">{props.desc}</div>
      </div>
      <div className="account-box__icon-wrapper">
        <SlArrowLeft className="account-box__icon" />
      </div>
    </div>
  );
}
