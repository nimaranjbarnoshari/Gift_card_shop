import React from "react";
import "./Flag.css";
export default function Flag({ src, country }) {
  return (
    <div className="flag">
      <img src={src} alt="flag" className="flag-img" />
      <span className="flag-name">{country}</span>
    </div>
  );
}
