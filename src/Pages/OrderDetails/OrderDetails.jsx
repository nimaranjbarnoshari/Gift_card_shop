import React from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

import "./OrderDetails.css";
export default function OrderDetails() {
  return (
    <div className="panel-styles order-details">
      <Link to="/panel/orders" className="order-details__link">
        <TiArrowBack className="order-details__link-icon" />
        <span className="order-details__link-text">بازگشت</span>
      </Link>
    </div>
  );
}
