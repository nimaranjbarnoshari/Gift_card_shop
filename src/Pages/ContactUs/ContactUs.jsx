import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import Socials from "../../Components/Socials/Socials";
import CommunicationBox from "../../Components/CommunicationBox/CommunicationBox";

import "./ContactUs.css";

export default function ContactUs() {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("sent");
  };
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="contact-us">
        <div className="container">
          <h2 className="contact-us__title">
            از هر کجای جهان با ما در ارتباط باشید
          </h2>
          <div className="contact-us__body">
            <div className="contact-us__communications">
              <div className="contact-us__communications-header">
                <img
                  src="/images/svg/communication.svg"
                  alt="svg"
                  className="contact-us__communications-icon"
                />
                <h4 className="contact-us__communications-title">
                  راه های ارتباطی
                </h4>
              </div>
              <div className="contact-us__communications-body">
                <CommunicationBox
                  src="/images/svg/whatsapp.svg"
                  title="واتس اپ:"
                  text="09214844154"
                />
                <CommunicationBox
                  src="/images/svg/instagram.svg"
                  title="اینستاگرام:"
                  text="@nimaranjbar1984"
                />
                <CommunicationBox
                  src="/images/svg/telegram.svg"
                  title="تلگرام:"
                  text="@Nima_R1984"
                />
                <CommunicationBox
                  src="/images/svg/email.svg"
                  title="ایمیل:"
                  text="nimaranjbarnoshari@gmail.com"
                />
                <CommunicationBox
                  src="/images/svg/phone.svg"
                  title="تلفن تماس:"
                  text="09125244154"
                />
                <CommunicationBox
                  src="/images/svg/location.svg"
                  title="آدرس"
                  text="Karaj"
                />
                <CommunicationBox
                  src="/images/svg/clock.svg"
                  title="ساعات کاری:"
                  text="۸صبح الی ۸شب"
                />
              </div>
            </div>
            <div className="contact-us__form">
              <div className="contact-us__form-header">
                <img
                  src="/images/svg/mail.svg"
                  alt="svg"
                  className="contact-us__form-icon"
                />
                <h4 className="contact-us__form-title">
                  فرم انتقادها و پیشنهادها
                </h4>
              </div>
              <form className="contact-us__form-body">
                <Input
                  className="contact-us__form-input"
                  type="email"
                  id="email"
                  label="آدرس ایمیل"
                  placeholder="آدرس ایمیل خود را وارد کنید ..."
                />
                <Input
                  className="contact-us__form-textarea"
                  id="textarea"
                  textarea={true}
                  label="نظر شما"
                  placeholder="بنویسید ..."
                />
                <Button
                  className="contact-us__form-button"
                  children="ارسال"
                  type="submit"
                  onClick={(event) => formSubmitHandler(event)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
