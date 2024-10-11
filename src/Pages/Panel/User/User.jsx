import React, { useContext } from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/‌Button";
import AuthContext from "../../../Context/AuthContext";
import PN from "persian-number";
import { FaUserCircle } from "react-icons/fa";
import { useFormik } from "formik";
import changePasswordSchema from "../../../changePasswordvalidate";

import "./User.css";
export default function User() {
  const contextData = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
    validationSchema: changePasswordSchema,
  });

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   console.log("submitted");
  // };
  return (
    <div className="panel-styles user-panel">
      <h2 className="user-panel__title">اطلاعات حساب کاربری</h2>
      <div className="user-panel__box">
        <div className="user-panel__box-header">
          <div className="user-panel__box-header-wrapper">
            <FaUserCircle className="user-panel__box-header-img" />
            <div className="user-panel__box-header-infos">
              <span className="user-panel__box-header-name">
                {contextData.userInfos.fullName}
              </span>
              <span className="user-panel__box-header-phone">
                {PN.convertEnToPe(contextData.userInfos.mobile)}
              </span>
            </div>
          </div>
          <span className="user-panel__box-header-logo">لوگو</span>
        </div>
        <form className="user-panel__box-form" onSubmit={formik.handleSubmit}>
          {/* <Input
            custom="user-panel__box-input"
            label="شماره تماس"
            placeholder="شماره تماس فعلی"
            value={PN.convertEnToPe(contextData.userInfos.mobile)}
          />
          <Input
            id="email"
            custom="user-panel__box-input"
            label="آدرس ایمیل"
            placeholder="آدرس ایمیل فعلی"
            value={contextData.userInfos.email}
          /> */}
          <Input
            id="password"
            custom="user-panel__box-input"
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد نمایید"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <span className="login-form__input-password-err">
              {formik.errors.password}
            </span>
          )}
          <Input
            id="new_password"
            custom="user-panel__box-input"
            label="رمز عبور جدید"
            placeholder="رمز عبور جدید را وارد نمایید "
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            onBlur={formik.handleBlur}
          />
          {formik.errors.newPassword && formik.touched.newPassword && (
            <span className="login-form__input-password-err">
              {formik.errors.newPassword}
            </span>
          )}
          <Input
            id="repeat_new_password"
            custom="user-panel__box-input"
            label="تکرار رمز عبور جدید"
            placeholder="رمز عبور جدید را مجددا وارد نمایید"
            onChange={formik.handleChange}
            value={formik.values.confirmNewPassword}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirmNewPassword &&
            formik.touched.confirmNewPassword && (
              <span className="login-form__input-password-err">
                {formik.errors.confirmNewPassword}
              </span>
            )}
          <Button
            className="user-panel__box-btn"
            type="submit"
            disabled={!formik.isValid}
          >
            ثبت تغییرات
          </Button>
        </form>
      </div>
    </div>
  );
}
