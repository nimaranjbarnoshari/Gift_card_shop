import React from "react";
import "./CommunicationBox.css";
export default function CommunicationBox({ src, title, text }) {
  return (
    <div className="communication">
      <div className="communication__right">
        <img src={src} alt="svg" className="communication__icon" />
        <span className="communication__title">{title}</span>
      </div>
      <div className="communication__left">
        <span className="communication__text">{text}</span>
      </div>
    </div>
  );
}
