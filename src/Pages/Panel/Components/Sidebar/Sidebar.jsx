import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbDashboard } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { BsFileText } from "react-icons/bs";
import { LuTicket } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";


import "./Sidebar.css";
export default function Sidebar() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  return (
    <div className={`sidebar ${isShowSidebar ? "show-sidebar" : ""}`}>
      <div className="sidebar-logo">
        <NavLink to="/">
          <img
            src="/images/logo/logo.png"
            alt="logo"
            className="sidebar-logo__img"
          />
        </NavLink>
        <button
          className="sidebar-button"
          onClick={() => setIsShowSidebar(!isShowSidebar)}
        >
          {isShowSidebar ? (
            <IoClose className="sidebar-button__icon" />
          ) : (
            <CgMenuGridO className="sidebar-button__icon" />
          )}
        </button>
      </div>
      <div className="sidebar-container">
        <ul className="sidebar-list__items">
          <li className="sidebar-list__item">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-list__link sidebar-list__link--active"
                  : "sidebar-list__link"
              }
            >
              <TbDashboard className="sidebar-list__icon" />
              داشبورد
            </NavLink>
          </li>
          <li className="sidebar-list__item">
            <NavLink
              to="orders"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-list__link sidebar-list__link--active"
                  : "sidebar-list__link"
              }
            >
              <BsFileText className="sidebar-list__icon" />
              سفارشات من
            </NavLink>
          </li>
          <li className="sidebar-list__item">
            <NavLink
              to="wallet"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-list__link sidebar-list__link--active"
                  : "sidebar-list__link"
              }
            >
              <CiWallet className="sidebar-list__icon" />
              کیف پول
            </NavLink>
          </li>
          <li className="sidebar-list__item">
            <NavLink
              to="tickets"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-list__link sidebar-list__link--active"
                  : "sidebar-list__link"
              }
            >
              <LuTicket className="sidebar-list__icon" />
              تیکت ها
            </NavLink>
          </li>
          <li className="sidebar-list__item">
            <NavLink
              to="user"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-list__link sidebar-list__link--active"
                  : "sidebar-list__link"
              }
            >
              <LuUser2 className="sidebar-list__icon" />
              اطلاعات کاربری
            </NavLink>
          </li>
        </ul>
        <div className="sideebar-footer">
          <span className="sideebar-footer__title">
            نیاز به پشتیبانی دارید؟
          </span>
          <span className="sideebar-footer__mobile">۰۹۱۲-۵۲۴-۴۱۵۴</span>
        </div>
      </div>
    </div>
  );
}
