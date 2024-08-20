import React from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

import "./AccountBox.css";
export default function AccountBox({ src, title, desc, svg , href}) {
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
      <Link to={href}  className="account-box__link">
        <SlArrowLeft className="account-box__icon" />
      </Link>
    </div>
  );
}
