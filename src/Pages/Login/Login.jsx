import React from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import { Link } from "react-router-dom";

import "./Login.css";
export default function Login() {
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log("login");
  };
  return (
    <div className="login">
      <div className="container">
        <div className="login-container">
          <div className="login-box">
            <div className="login-box__header">
              <div className="login-box__header-logo">
                <Link to="/">
                  <img
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="login-box__header-img"
                  />
                </Link>
              </div>
              <h3 className="login-box__header-title">ورود به حساب</h3>
              <p className="login-box__header-text">
                لطفا برای ورود اطلاعات زیر را کامل کنید
              </p>
            </div>
            <form className="login-form">
              <Input
                id="phone"
                type="number"
                label="شماره تماس"
                placeholder="۰۹**ـ***ـ****"
                className="login-form__input-phone"
              />
              <Input
                id="password"
                type="password"
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد کنید"
                src="/images/svg/unlock.svg"
                className="login-form__input-password"
              />
              <div className="login-form__forget">
                <span className="login-form__forget-text">فراموشی</span>{" "}
                <Link to="/otp" className="login-form__forget-link">
                  رمزعبور
                </Link>
              </div>
              <Button
                children="ورود"
                type="submit"
                onClick={(event) => submitFormHandler(event)}
                className="login-form__button"
              />
            </form>
            <div className="login-form__footer">
              <span className="login-form__foter-text">
                حساب کاربری ندارید؟
              </span>{" "}
              <Link to="/register" className="login-form__footer-link">
                ثبت نام کنید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
