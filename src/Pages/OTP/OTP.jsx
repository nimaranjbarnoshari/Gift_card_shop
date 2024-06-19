import React from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./OTP.css";
export default function OTP() {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="otp">
      <div className="container">
        <div className="otp-container">
          <div className="otp-box">
            <div className="otp-box__header">
              <div className="otp-box__header-logo">
                <Link to="/">
                  <img
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="otp-box__header-img"
                  />
                </Link>
              </div>
              <h3 className="otp-box__header-title">فراموشی رمز عبور</h3>
              <p className="otp-box__header-text">
                شماره تلفن خود را برای ارسال کد تایید وارد نمایید
              </p>
            </div>
            <form className="otp-form">
              <Input
                id="phone"
                type="number"
                label="شماره تماس"
                placeholder="۰۹**ـ***ـ****"
                className="otp-form__input-phone"
              />

              <Button
                children="ارسال کد"
                type="submit"
                onClick={(event) => submitHandler(event)}
                className="otp-form__button"
              />
            </form>
            <div className="otp-form__footer">
              <Link to="/login" className="otp-form__footer-link">
                <FaArrowRight className="otp-form__footer-icon" />
                <span className="otp-form__foter-text">
                  بازگشت به مرحله قبل
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
