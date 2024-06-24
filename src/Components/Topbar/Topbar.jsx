import React from "react";
import { IoSearch } from "react-icons/io5";

import "./Topbar.css";
export default function Topbar() {
  return (
    <div className="container">
      <div className="topbar-container">
        <img
          src="/images/logo/Logo.png"
          alt="logo_iamage"
          className="topbar-logo"
        />
        <div className="topbar-input__wrapper">
          <input
            type="text"
            className="topbar-input"
            placeholder="جستجوی محصول"
          />

          <IoSearch className="topbar-icon"/>
          
        </div>
      </div>
    </div>
  );
}
