import React from "react";
import "./SectionHeader.css";

export default function SectionHeader(props) {
  return (
    <div className="section-header">
      <div className="section-header__wrapper">
        <h2 className="section-header__title">{props.title}</h2>
        {props.off ? (
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
