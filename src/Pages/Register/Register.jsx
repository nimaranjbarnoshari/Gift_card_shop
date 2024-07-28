import React, { useState, useEffect } from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [isShowCodeInput, setIsShowCodeInput] = useState(false);
  const [code, setCode] = useState("");
  const [sendCode, setSendCode] = useState(0);
  const [allUsers, setAllUser] = useState([]);
  const [phone, setPhone] = useState("");
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/users")
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

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const isPhone = allUsers.find((user) => user.mobile === phone);
    if (!isPhone) {
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
        title: "قبلا با این شماره در سایت ثبت نام انجام شده است",
        text: "لطفا با شماره دیگری تلاش کنید",
        icon: "error",
        iconColor: "#Fd295c",
        confirmButtonColor: "#Fd295c",
      });
    }
  };

  const continueSignHandler = (event) => {
    event.preventDefault();
    if (+code === sendCode) {
      navigate(`/register/${phone}`);
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
    setIsChecked(false);
    setPhoneIsValid(false);
    setPhone("");
    navigate("/register");
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
              {isShowCodeInput ? (
                <Input
                  id="code"
                  type="text"
                  label="کد ارسالی"
                  placeholder="لطفا کد ارسالی را وارد نمایید"
                  className="register-form__input-code"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                />
              ) : (
                <>
                  <Input
                    id="phone"
                    type="number"
                    label="شماره تماس"
                    placeholder="۰۹**ـ***ـ****"
                    className="register-form__input-phone"
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
                </>
              )}

              {isShowCodeInput ? (
                <Button
                  children="ادامه ثبت نام"
                  type="submit"
                  onClick={continueSignHandler}
                  className="register-form__link"
                />
              ) : (
                <>
                  <div className="register-form__checkbox-container">
                    <label className="chaeckbox-container">
                      <input
                        onChange={() => setIsChecked(!isChecked)}
                        id="check"
                        type="checkbox"
                        className="register-form__checkbox"
                      />
                      <span className="checkbox-checkmark"></span>
                    </label>
                    <label
                      htmlFor="check"
                      className="register-form__checkbox-label"
                    >
                      <Link
                        to="/rules"
                        className="register-form__checkbox-link"
                      >
                        شرایط و قوانین{" "}
                      </Link>
                      را می پذیرم
                    </label>
                  </div>

                  <Button
                    disabled={!(isChecked && phoneIsValid)}
                    children="ارسال کد"
                    type="submit"
                    onClick={(event) => {
                      submitFormHandler(event);
                    }}
                    className="register-form__button"
                  />
                </>
              )}
            </form>
            {isShowCodeInput ? (
              <div className="register-form__footer">
                <span className="register-form__foter-text">
                  شماره را اشتباه وارد کردید؟
                </span>{" "}
                <Link
                  to=""
                  className="register-form__footer-link"
                  onClick={changePhoneHandler}
                >
                  ورود مجدد شماره
                </Link>
              </div>
            ) : (
              <div className="register-form__footer">
                <span className="register-form__foter-text">
                  حساب کاربری دارید؟
                </span>{" "}
                <Link to="/login" className="register-form__footer-link">
                  وارد شوید
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
