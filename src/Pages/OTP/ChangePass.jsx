import React, { useContext } from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { useFormik } from "formik";
import { changePassSchema } from "../../registerVlidation";
import Swal from "sweetalert2";

import "./ChangePass.css";

export default function ChangePass() {
  const { ID } = useParams();
  const contextData = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ password }) => {
      const res = await fetch(`http://localhost:8000/users/${ID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        const userInfo = await res.json();

        Swal.fire({
          title: "رمز عبور شما با موفقیت تغییر یافت",
          // text: "لطفا با رمز عبور جدید وارد شوید",
          icon: "success",
        }).then(() => {
          contextData.login(userInfo, userInfo.token);
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
    validationSchema: changePassSchema,
  });
  return (
    <div className="changePass">
      <div className="container">
        <div className="changePass-container">
          <div className="changePass-box">
            <div className="changePass-box__header">
              <div className="changePass-box__header-logo">
                <Link to="/">
                  <img
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="changePass-box__header-img"
                  />
                </Link>
              </div>
              <h3 className="changePass-box__header-title">تغییر رمز عبور</h3>
              <p className="changePass-box__header-text">
                لطفا رمز عبور جدید خود را وارد نمایید
              </p>
            </div>
            <form className="changePass-form" onSubmit={formik.handleSubmit}>
              <Input
                id="password"
                type="password"
                label="رمز عبور جدید"
                placeholder="لطفا رمز عبور جدید را وارد نمایید"
                custom="changePass-form__input"
                value={formik.values.password}
                onChange={formik.handleChange}
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
                label="تکرار رمز عبور جدید"
                placeholder="لطفا رمز عبور جدید را مجددا وارد نمایید"
                custom="changePass-form__input"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <span className="finishRegister-form__input-err">
                    {formik.errors.confirmPassword}
                  </span>
                )}
              <Button
                children="تغییر رمز عبور"
                type="submit"
                className="changePass-form__button"
              />
            </form>
            <div className="changePass-form__footer">
              <span className="changePass-form__foter-text">
                منصرف شده اید؟
              </span>{" "}
              <Link to="/login" className="changePass-form__footer-link">
                ورود
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
