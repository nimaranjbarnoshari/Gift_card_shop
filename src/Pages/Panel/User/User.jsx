import React from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/‌Button";
import "./User.css";
export default function User() {
  return (
    <div className="panel-styles user-panel">
      <h2 className="user-panel__title">اطلاعات حساب کاربری</h2>
      <div className="user-panel__box">
        <div className="user-panel__box-header">
          <div className="user-panel__box-header-wrapper">
            <img
              src="/images/user/user1.jpg"
              alt="userImage"
              className="user-panel__box-header-img"
            />
            <div className="user-panel__box-header-infos">
              <span className="user-panel__box-header-name">نیما رنجبر</span>
              <span className="user-panel__box-header-phone">۰۹۱۲۵۲۴۴۱۵۴</span>
            </div>
          </div>
          <span className="user-panel__box-header-logo">لوگو</span>
        </div>
        <form action="#" className="user-panel__box-form">
          <Input
            custom="user-panel__box-input"
            label="نام کاربری"
            placeholder="نام کاربری فعلی"
          />
          <Input
            custom="user-panel__box-input"
            label="شماره تماس"
            placeholder="شماره تماس فعلی"
          />
          <Input
            custom="user-panel__box-input"
            label="آدرس ایمیل"
            placeholder="آدرس ایمیل فعلی"
          />
          <Input
            custom="user-panel__box-input"
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد نمایید"
          />
          <Input
            custom="user-panel__box-input"
            label="رمز عبور جدید"
            placeholder="رمز عبور جدید را وارد نمایید "
          />
          <Input
            custom="user-panel__box-input"
            label="تکرار رمز عبور جدید"
            placeholder="رمز عبور جدید را مجددا وارد نمایید"
          />
          <Button className="user-panel__box-btn" type="submit">
            ثبت تغییرات
          </Button>
        </form>
      </div>
    </div>
  );
}
