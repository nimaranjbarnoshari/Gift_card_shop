import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import AuthContext from "../../Context/AuthContext";

import "./Topbar.css";
export default function Topbar() {
  const ContextData = useContext(AuthContext);
  return (
    <div className="container">
      <div className="topbar-container">
        <img
          src="/images/logo/Logo.png"
          alt="logo_iamage"
          className="topbar-logo"
        />
        <span className="topbar-title">
          {ContextData.isLoggedIn && ContextData.userInfos ? `${ContextData.userInfos.fullName} عزیز خوش آمدید` : ""}
        </span>
        <div className="topbar-input__wrapper">
          <input
            type="text"
            className="topbar-input"
            placeholder="جستجوی محصول"
          />

          <IoSearch className="topbar-icon" />
        </div>
      </div>
    </div>
  );
}
