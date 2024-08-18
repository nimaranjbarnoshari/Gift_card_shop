import React, { useContext } from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/‌Button";
import AuthContext from "../../../Context/AuthContext";
import PN from "persian-number";
import { FaUserCircle } from "react-icons/fa";

import "./User.css";
export default function User() {
  const contextData = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="panel-styles user-panel">
      <h2 className="user-panel__title">اطلاعات حساب کاربری</h2>
      <div className="user-panel__box">
        <div className="user-panel__box-header">
          <div className="user-panel__box-header-wrapper">
            {/* <img
              src="/images/user/user1.jpg"
              alt="userImage"
              className="user-panel__box-header-img"
            /> */}
            <FaUserCircle className="user-panel__box-header-img"/>
            <div className="user-panel__box-header-infos">
              <span className="user-panel__box-header-name">
                {contextData.userInfos.fullName}
              </span>
              <span className="user-panel__box-header-phone">
                {PN.convertEnToPe(contextData.userInfos.mobile)}
              </span>
            </div>
          </div>
          <span className="user-panel__box-header-logo">لوگو</span>
        </div>
        <form action="#" className="user-panel__box-form">
          <Input
            custom="user-panel__box-input"
            label="شماره تماس"
            placeholder="شماره تماس فعلی"
            value={PN.convertEnToPe(contextData.userInfos.mobile)}
          />
          <Input
            id="email"
            custom="user-panel__box-input"
            label="آدرس ایمیل"
            placeholder="آدرس ایمیل فعلی"
            value={contextData.userInfos.email}
          />
          <Input
            id="password"
            custom="user-panel__box-input"
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد نمایید"
          />
          <Input
            id="new_password"
            custom="user-panel__box-input"
            label="رمز عبور جدید"
            placeholder="رمز عبور جدید را وارد نمایید "
          />
          <Input
            id="repeat_new_password"
            custom="user-panel__box-input"
            label="تکرار رمز عبور جدید"
            placeholder="رمز عبور جدید را مجددا وارد نمایید"
          />
          <Button
            className="user-panel__box-btn"
            type="submit"
            onClick={(event) => submitHandler(event)}
          >
            ثبت تغییرات
          </Button>
        </form>
      </div>
    </div>
  );
}
