import React from "react";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./ArticlesBanner.css";

export default function ArticlesBanner({ title, date }) {
  return (
    <div className="articles-banner">
      <h4 className="articles-banner__title">{title}</h4>
      <div className="articles-banner__info">
        <div className="articles-banner__info-date">
          <BsClock className="articles-banner__info-icon" />
          <span className="articles-banner__info-text">{date}</span>
        </div>
        <Link to="#" className="articles-banner__info-link">
          ادامه مطلب
        </Link>
      </div>
    </div>
  );
}
