import React, { useState, useContext, useEffect } from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import loginSchema from "../../loginValidate";
import "./Login.css";

export default function Login() {
  const contextData = useContext(AuthContext);
  const navigate = useNavigate();
  const [allUsers, setAllUser] = useState([]);
  // const [errors, setErrors] = useState({});

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: async (values) => {
      const isSign = allUsers.find(
        (user) =>
          user.mobile === values.phone && user.password === values.password
      );

      if (isSign) {
        contextData.login(isSign, isSign.token);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          iconColor: "#Fd295c",
          title: "با موفقیت وارد شدید",
          color: "#fd295c",
          width: "300px",
          padding: "20px 15px",
          showCloseButton: true,
        });
        navigate("/");
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          iconColor: "#Fd295c",
          title: "شماره تماس یا رمز عبور اشتباه می باشد ، لطفا مجددا تلاش کنید",
          color: "#fd295c",
          width: "570px",
          padding: "20px 15px",
          showCloseButton: true,
        });
      }
    },
    validationSchema: loginSchema,
  });

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);

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
            <form className="login-form" onSubmit={formik.handleSubmit}>
              <Input
                id="phone"
                name="phone"
                type="text"
                label="شماره تماس"
                placeholder="۰۹**ـ***ـ****"
                custom="login-form__input-phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phone && formik.touched.phone && (
                <span className="login-form__input-phone-err">
                  {formik.errors.phone}
                </span>
              )}
              <Input
                id="password"
                name="password"
                type="password"
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد کنید"
                src="/images/svg/unlock.svg"
                custom="login-form__input-password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <span className="login-form__input-password-err">
                  {formik.errors.password}
                </span>
              )}
              <div className="login-form__forget">
                <span className="login-form__forget-text">فراموشی</span>{" "}
                <Link to="/otp" className="login-form__forget-link">
                  رمزعبور
                </Link>
              </div>
              <Button
                children="ورود"
                type="submit"
                className="login-form__button"
                disabled={!formik.isValid}
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
