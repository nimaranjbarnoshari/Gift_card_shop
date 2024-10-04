import React, { useContext, useEffect, useState } from "react";
import { PiBellRingingBold } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../../Context/AuthContext";

import "./PanelTopbar.css";
export default function PanelTopbar() {
  const contextData = useContext(AuthContext);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [weekDay, setWeekDay] = useState("");

  useEffect(() => {
    const today = new Date();
    setDay(today.toLocaleDateString("fa-IR", { day: "numeric" }));
    setMonth(today.toLocaleDateString("fa-IR", { month: "long" }));
    setYear(today.toLocaleDateString("fa-IR", { year: "numeric" }));
    setWeekDay(today.toLocaleDateString("fa-IR", { weekday: "long" }));
  }, []);
  return (
    <div className="panel-topbar">
      <div className="panel-topbar-right">
        <span className="panel-topbar__phone">
          {contextData.userInfos.fullName}
        </span>
      </div>
      <div className="panel-topbar-left">
        <NavLink
          to="notifications"
          className={({ isActive }) =>
            isActive
              ? "panel-topbar__notif-link panel-topbar__notif-link--active"
              : "panel-topbar__notif-link"
          }
        >
          <PiBellRingingBold className="panel-topbar__notif-icon" />
          <span className="panel-topbar__notif-alarm"></span>
        </NavLink>
        <div className="panel-topbar__today">
          <CiCalendar className="panel-topbar__icon" />
          <span className="panel-topbar__date">{weekDay}</span>
          <span className="panel-topbar__time">{`${day} ${month} ${year}`}</span>
        </div>
        <button
          className="panel-topbar__logout-button"
          onClick={() => contextData.logout()}
        >
          <FiLogOut className="panel-topbar__logout-icon" />
        </button>
      </div>
    </div>
  );
}
