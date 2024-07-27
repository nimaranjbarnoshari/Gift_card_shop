import React, { useState, useContext } from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../Context/AuthContext";
import "./FinishRegister.css";
export default function FinishRegister() {
  const { mobile } = useParams();
  const contextData = useContext(AuthContext);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const completeSignup = async () => {
    const token =
      Math.floor(Math.random() * 1000000) +
      email.slice(0, 6) +
      Math.floor(Math.random() * 1000000) +
      email +
      Math.floor(Math.random() * 1000000);

    const user = {
      fullName,
      mobile,
      email,
      password,
      token,
    };

    const res = await fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      const response = await res.json();

      Swal.fire({
        title: "ثبت نام شما با موفقیت انجام شد",
        icon: "success",
      }).then(() => {
        contextData.login(response, response.token);
        navigate("/");
      });
    } else {
      Swal.fire({
        title: "متاسفانه خطایی رخ داد",
        color: "#fd295c",
        icon: "error",
        iconColor: "#fd295c",
      });
    }
  };

  return (
    <div className="finishRegister">
      <div className="container">
        <div className="finishRegister-container">
          <div className="finishRegister-box">
            <div className="finishRegister-box__header">
              <div className="finishRegister-box__header-logo">
                <Link to="/">
                  <img
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="finishRegister-box__header-img"
                  />
                </Link>
              </div>
              <h3 className="finishRegister-box__header-title">
                ثبت نام کاربر
              </h3>
              <p className="finishRegister-box__header-text">
                لطفا برای ثبت نام اطلاعات زیر را کامل کنید
              </p>
            </div>
            <form className="finishRegister-form">
              <Input
                id="fullName"
                type="text"
                label="نام و نام خانوادگی"
                placeholder="نام و نام خانوادگی خود را وارد نمایید"
                className="finishRegister-form__input-phone"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
              <Input
                id="email"
                type="email"
                label="ایمیل"
                placeholder="ایمیل خود را وارد نمایید"
                className="finishRegister-form__input-phone"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                id="password"
                type="password"
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد نمایید"
                className="finishRegister-form__input-phone"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Input
                id="repeatPassword"
                type="password"
                label="تکرار رمز عبور"
                placeholder="رمز عبور خود را تکرار نمایید"
                className="finishRegister-form__input-phone"
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
              />

              <Button
                children="تکمیل ثبت نام"
                type="button"
                onClick={completeSignup}
                className="finishRegister-form__link"
              />
            </form>

            <div className="finishRegister-form__footer">
              <span className="finishRegister-form__foter-text">
                ادامه نمی دهید؟
              </span>{" "}
              <Link to="/login" className="finishRegister-form__footer-link">
                انصراف از ثبت نام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
