import React from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import "./BackLink.css";
export default function BackLink({ to }) {
  return (
    <Link to={to} className="back-link">
      <TiArrowBack className="back-link__icon" />
      <span className="back-link__text">بازگشت</span>
    </Link>
  );
}
