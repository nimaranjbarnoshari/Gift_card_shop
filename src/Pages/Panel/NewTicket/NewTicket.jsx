import React from "react";
import BackLink from "../Components/BackLink/BackLink";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/‌Button";
import "./NewTicket.css";
export default function NewTicket() {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="panel-styles new-ticket">
      <BackLink to="/panel/tickets" />
      <h2 className="new-ticket__header">تیکت جدید</h2>
      <div className="new-ticket__box">
        <div className="new-ticket__box-header">
          <h3 className="new-ticket__box-title">افزودن تیکت جدید</h3>
        </div>
        <div className="new-ticket__box-body">
          <form action="">
            <div className="new-ticket__box-inputs">
              <Input
                id="titleInput"
                label="عنوان تیکت"
                placeholder="عنوان را وارد کنید ..."
                className="new-ticket__box-input-title"
              />
              <div className="new-ticket__box-select-container">
                <label htmlFor="SelectBox">دپارتمان</label>
                <select name="" id="SelectBox" className="new-ticket__box-select">
                  <option value="">یک گزینه را انتخاب کنید</option>
                  <option value="">پشتیبانی سایت</option>
                  <option value="">فنی</option>
                  <option value="">مالی</option>
                </select>
              </div>
            </div>
            <Input
              textarea={true}
              id="textarea"
              label="متن تیکت"
              placeholder="متن تیکت را وارد کنید ..."
              custom="new-ticket__box-textarea"
            />
<div className="">     
  <div className="">
    <span>تصویری از مشکل خود دارید؟</span>
    <Input type="file"/>
    </div>       
            <Button
              type="submit"
              onClick={(event) => submitHandler(event)}
              className="new-ticket__box-btn"
            >
              ارسال تیکت
            </Button>

</div>
          </form>
        </div>
      </div>
    </div>
  );
}
