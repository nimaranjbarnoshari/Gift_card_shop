import React from "react";
import "./SectionHeader.css";

export default function SectionHeader({ title, off, footer }) {
  return (
    <div className={`section-header ${footer ? "footer-header" : ""}`}>
      <div className="section-header__wrapper">
        <h2
          className={`section-header__title ${
            footer ? "footer-header__title" : ""
          }`}
        >
          {title}
        </h2>
        {off ? (
          <img
            src="/images/svg/off.svg"
            alt="off_svg"
            className="section-header__svg"
          />
        ) : (
          ""
        )}

        <div className="sction-header__underline"></div>
      </div>
    </div>
  );
}
