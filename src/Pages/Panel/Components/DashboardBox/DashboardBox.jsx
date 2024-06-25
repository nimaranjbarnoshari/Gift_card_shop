import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./DashboardBox.css";
export default function DashboardBox({ to, src, title, count, bg }) {
  return (
    <div className="dashboard-box">
      <div
        className={
          bg
            ? `dashboard-box__header ${bg === "orange" ? "orange" : "pink"}`
            : "dashboard-box__header"
        }
      >
        <img src={src} alt="icon" className="dashboard-box__icon" />
      </div>
      <span className="dashboard-box__count">{count}</span>
      <div className="dashboard-box__footer">
        <span className="dashboard-box__footer-title">{title}</span>
        <Link to={to} className="dashboard-box__footer-link">
          <FaArrowLeft className="dashboard-box__footer-icon" />
        </Link>
      </div>
    </div>
  );
}
