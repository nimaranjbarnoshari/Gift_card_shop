import React from "react";
import "./Flag.css";
export default function Flag({ src, country, title, custom }) {
  return (
    <div
      className={`flag ${title ? "flag-title" : ""} ${
        custom ? `${custom}` : ""
      }`}
    >
      <img src={src} alt="flag" className="flag-img" />
      <span className="flag-name">{title ? title : country}</span>
    </div>
  );
}
