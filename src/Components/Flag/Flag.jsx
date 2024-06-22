import React from "react";
import "./Flag.css";
export default function Flag({ src, country, title }) {
  return (
    <div className={`flag ${title ? "flag-title" : ""}`}>
      <img src={src} alt="flag" className="flag-img" />
      <span className="flag-name">{title ? title : country}</span>
    </div>
  );
}
