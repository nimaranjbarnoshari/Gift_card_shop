import React, { useState } from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import { Link } from "react-router-dom";

import "./Register.css";

export default function Register() {
  const [isChecked, setIsChecked] = useState(false);

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log("register");
  };
  return (
    <div className="register">
      <div className="container">
        <div className="register-container">
          <div className="register-box">
            <div className="register-box__header">
              <div className="register-box__header-logo">
                <Link to="/">
                  <img
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="register-box__header-img"
                  />
                </Link>
              </div>
              <h3 className="register-box__header-title">ثبت نام کاربر</h3>
              <p className="register-box__header-text">
                لطفا برای ثبت نام اطلاعات زیر را کامل کنید
              </p>
            </div>
            <form className="register-form">
              <Input
                id="phone"
                type="number"
                label="شماره تماس"
                placeholder="۰۹**ـ***ـ****"
                className="register-form__input-phone"
              />

              <div className="register-form__checkbox-container">
                <label className="chaeckbox-container">
                  <input
                    onChange={() => setIsChecked(!isChecked)}
                    id="check"
                    type="checkbox"
                    className="register-form__checkbox"
                  />
                  <span className="checkbox-heckmark"></span>
                </label>
                <label
                  htmlFor="check"
                  className="register-form__checkbox-label"
                >
                  <Link to="/rules" className="register-form__checkbox-link">
                    شرایط و قوانین{" "}
                  </Link>
                  را می پذیرم
                </label>
              </div>

              <Button
                disabled={!isChecked}
                children="ارسال کد"
                type="submit"
                onClick={(event) => submitFormHandler(event)}
                className="register-form__button"
              />
            </form>
            <div className="register-form__footer">
              <span className="register-form__foter-text">
                حساب کاربری دارید؟
              </span>{" "}
              <Link to="/login" className="register-form__footer-link">
                وارد شوید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
