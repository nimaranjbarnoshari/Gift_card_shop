import React from "react";
import "./Service.css";

export default function Service(props) {
  return (
    <div className="service-wrapper">
      <div className="service-svg__container">
        <img src={props.src} alt="svg" className="service-svg" />
      </div>
      <h4 className="service-title">{props.title}</h4>
    </div>
  );
}
