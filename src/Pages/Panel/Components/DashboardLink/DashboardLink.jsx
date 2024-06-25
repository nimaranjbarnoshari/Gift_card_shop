import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./DashboardLink.css";

export default function DashboardLink({ title, to }) {
  return (
    <Link to={to} className="dashboard-link">
      <span className="dashboard-link__title">{title}</span>
      <IoIosArrowBack className="dashboard-link__icon" />
    </Link>
  );
}
