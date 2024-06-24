import React from "react";
import "./BenefitBox.css";

export default function BenefitBox({ src, title, bg }) {
  console.log(bg);
  return (
    <div className={`benefitBox-wrapper ${bg ? "" : "none-bg"}`}>
      <div className="benefitBox-svg__container">
        <img src={src} alt="svg" className="benefitBox-svg" />
      </div>
      <h4 className="benefitBox-title">{title}</h4>
    </div>
  );
}
