import React, { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import { IoIosNotifications } from "react-icons/io";

import "./Notifications.css";

export default function Notifications() {
  const contextData = useContext(AuthContext);
  return (
    <div className="panel-styles notification">
      <h2 className="notification-title">اطلاعیه ها</h2>
      {contextData.userNotifications.length ? (
        <h2 className="m-auto fs-1 fw-bold">Notifications</h2>
      ) : (
        <div className="dashboard-tickets__body">
          <IoIosNotifications className="dashboard-order__body-icon" />
          <span className="dashboard-tickets__body-title">
            اطلاعیه ای یافت نشد!
          </span>
        </div>
      )}
    </div>
  );
}
