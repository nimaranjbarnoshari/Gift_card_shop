import React, { useContext } from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../Context/AuthContext";
import { useFormik } from "formik";
import {registerSchema} from "../../registerVlidation";
import "./FinishRegister.css";

export default function FinishRegister() {
  const { mobile } = useParams();
  const contextData = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ fullName, email, password }) => {
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
        balance: 0,
        basket: [],
      };
      console.log(user);
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
    },
    validationSchema: registerSchema,
  });

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
            <form
              className="finishRegister-form"
              onSubmit={formik.handleSubmit}
            >
              <Input
                id="fullName"
                type="text"
                label="نام و نام خانوادگی"
                placeholder="نام و نام خانوادگی خود را وارد نمایید"
                custom="finishRegister-form__input"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <span className="finishRegister-form__input-err">
                  {formik.errors.fullName}
                </span>
              )}
              <Input
                id="email"
                type="email"
                label="ایمیل"
                placeholder="ایمیل خود را وارد نمایید"
                custom="finishRegister-form__input"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <span className="finishRegister-form__input-err">
                  {formik.errors.email}
                </span>
              )}
              <Input
                id="password"
                type="password"
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد نمایید"
                custom="finishRegister-form__input"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <span className="finishRegister-form__input-err">
                  {formik.errors.password}
                </span>
              )}
              <Input
                id="confirmPassword"
                type="password"
                label="تکرار رمز عبور"
                placeholder="رمز عبور خود را تکرار نمایید"
                custom="finishRegister-form__input"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <span className="finishRegister-form__input-err">
                    {formik.errors.confirmPassword}
                  </span>
                )}
              <Button
                children="تکمیل ثبت نام"
                type="submit"
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
