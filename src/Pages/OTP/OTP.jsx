import React, { useContext, useEffect, useState } from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";
import AuthContext from "../../Context/AuthContext";

import "./OTP.css";
export default function OTP() {
  const contextData = useContext(AuthContext);
  const navigate = useNavigate();
  const [allUsers, setAllUser] = useState({});
  const [phone, setPhone] = useState("");
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [isShowCodeInput, setIsShowCodeInput] = useState(false);
  const [code, setCode] = useState("");
  const [sendCode, setSendCode] = useState(0);
  const [ID, setID] = useState("");

  useEffect(() => {
    fetch(`${contextData.back_url}users`)
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);

  useEffect(() => {
    if (!phone) {
      setErrorMessage("وارد کردن شماره الزامی می باشد");
      setPhoneIsValid(false);
    } else if (phone.match(/^(\+98|0)?9\d{9}$/)) {
      setPhoneIsValid(true);
      setErrorMessage("");
    } else {
      setPhoneIsValid(false);
      setErrorMessage("شماره معتبر نمی باشد");
    }
  }, [phone]);

  const sendCodeHandler = (event) => {
    event.preventDefault();
    const isPhone = allUsers.find((user) => user.mobile === phone);
    if (isPhone) {
      setID(isPhone.id);
      setIsShowCodeInput(true);
      const sentCode = Math.floor(Math.random() * 100000);
      setSendCode(sentCode);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        title: sentCode,
        text: "کد ارسالی",
        color: "#fd295c",
        width: "570px",
        padding: "20px 15px",
        showCloseButton: true,
      });
    } else {
      Swal.fire({
        title: "با این شماره در سایت ثبت نام انجام نشده است",
        text: "لطفا ثبت نام کنید",
        icon: "error",
        iconColor: "#Fd295c",
        confirmButtonColor: "#Fd295c",
      });
    }
  };
  const confirmCodeHandler = (event) => {
    event.preventDefault();
    if (+code === sendCode) {
      navigate(`/otp/${ID}`);
    } else {
      Swal.fire({
        title: " کد اشتباه است",
        text: "لطفا مجددا کد را وارد نمایید",
        icon: "error",
        iconColor: "#Fd295c",
        confirmButtonColor: "#Fd295c",
      });
    }
  };

  const changePhoneHandler = () => {
    setIsShowCodeInput(false);
    setPhoneIsValid(false);
    setShowError(false);
    setPhone("");
    setCode("");
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
                    src="/images/logo/Logo.png"
                    alt="logo"
                    className="otp-box__header-img"
                  />
                </Link>
              </div>
              <h3 className="otp-box__header-title">فراموشی رمز عبور</h3>
              <p className="otp-box__header-text">
                {isShowCodeInput
                  ? `کد تایید به شماره ${phone} ارسال شد`
                  : "شماره تلفن خود را برای ارسال کد تایید وارد نمایید"}
              </p>
            </div>
            <form className="otp-form">
              {isShowCodeInput ? (
                <>
                  <Input
                    id="code"
                    type="text"
                    label="کد ارسالی"
                    placeholder="لطفا کد ارسالی را وارد نمایید"
                    className="register-form__input-code"
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                  />
                  <Button
                    children="تایید کد"
                    type="submit"
                    onClick={(event) => confirmCodeHandler(event)}
                    className="otp-form__button"
                  />
                </>
              ) : (
                <>
                  <Input
                    id="phone"
                    type="number"
                    label="شماره تماس"
                    placeholder="۰۹**ـ***ـ****"
                    className="otp-form__input-phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    onBlur={() => setShowError(true)}
                  />
                  {errorMessage && showError ? (
                    <span className="register-form__input-phone-err">
                      {errorMessage}
                    </span>
                  ) : (
                    ""
                  )}
                  <Button
                    disabled={!phoneIsValid}
                    children="ارسال کد"
                    type="submit"
                    onClick={(event) => sendCodeHandler(event)}
                    className="otp-form__button"
                  />
                </>
              )}
            </form>
            <div className="otp-form__footer">
              {isShowCodeInput ? (
                <>
                  <span className="register-form__foter-text">
                    شماره را اشتباه وارد کردید؟
                  </span>{" "}
                  <Link
                    to="/otp"
                    className="register-form__footer-link"
                    onClick={changePhoneHandler}
                  >
                    ورود مجدد شماره
                  </Link>
                </>
              ) : (
                <Link to="/login" className="otp-form__footer-link">
                  <FaArrowRight className="otp-form__footer-icon" />
                  <span className="otp-form__foter-text">
                    بازگشت به مرحله قبل
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
