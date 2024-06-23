import React from "react";
import "./BenefitBox.css";

export default function BenefitBox(props, noBG) {
  return (
    <div className={`benefitBox-wrapper ${noBG ? "none-bg" : ""}`}>
      <div className="benefitBox-svg__container">
        <img src={props.src} alt="svg" className="benefitBox-svg" />
      </div>
      <h4 className="benefitBox-title">{props.title}</h4>
    </div>
  );
}
