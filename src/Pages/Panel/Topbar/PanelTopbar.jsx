import React from "react";
import { PiBellRingingBold } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import "./PanelTopbar.css";
export default function PanelTopbar() {
  return (
    <div className="panel-topbar">
      <div className="panel-topbar-right">
        <img
          src="/images/user/user.jpg"
          alt="user_img"
          className="panel-topbar__img"
        />
        <span className="panel-topbar__phone">۰۹۱۲۳۴۵۶۷۸۹</span>
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
          <span className="panel-topbar__date">۰۳ تیر ۱۴۰۳</span>
          <span className="panel-topbar__time">۲۲:۳۸</span>
        </div>
        <button className="panel-topbar__logout-button">
          <FiLogOut className="panel-topbar__logout-icon" />
        </button>
      </div>
    </div>
  );
}
