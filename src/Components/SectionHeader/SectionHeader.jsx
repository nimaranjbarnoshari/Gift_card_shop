import React from "react";
import "./SectionHeader.css";

export default function SectionHeader({ title, off, footer, span }) {
  return (
    <div
      className={`section-header ${footer ? "footer-header" : ""} ${
        span ? "span-header" : ""
      }`}
    >
      <div className="section-header__wrapper">
        <h2
          className={`section-header__title ${
            span ? "styles_for_gift_section" : ""
          } ${footer ? "footer-header__title" : ""}`}
        >
          {span ? (
            <span className="gift-card__section-header">{span}</span>
          ) : (
            ""
          )}
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
