import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section className="about-us">
        <div className="container">
          <div className="about-us__container">
            <div className="about-us__main">
              <div className="about-us__infos">
                <div className="about-us__infos-header">
                  <img
                    src="/images/svg/about.svg"
                    alt="svg"
                    className="about-us__infos-icon"
                  />
                  <h4 className="about-us__infos-title">درباره ما</h4>
                </div>
                <div className="about-us__infos-body">
                  <p className="about-us__infos-text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                  <p className="about-us__infos-text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
              </div>
              <div className="about-us__statistics">
                <div className="about-us__statistics-header">
                  <img
                    src="/images/svg/about.svg"
                    alt="svg"
                    className="about-us__statistics-icon"
                  />
                  <h4 className="about-us__statistics-title">
                    آمار های دوست داشتنی ما
                  </h4>
                </div>
                <div className="about-us__statistics-body">
                  <div className="about-us__statistics-box">
                    <span className="about-us__statistics-box-title">
                      ۱۰۰
                      <span className="about-us__statistics-box-title-plus">
                        +
                      </span>
                    </span>
                    <span className="about-us__statistics-box-text">
                      محصول برای شما
                    </span>
                  </div>
                  <div className="about-us__statistics-box">
                    <span className="about-us__statistics-box-title">
                      ۱۰۰
                      <span className="about-us__statistics-box-title-plus">
                        +
                      </span>
                    </span>
                    <span className="about-us__statistics-box-text">
                      مشتری راضی و خوشحال
                    </span>
                  </div>
                  <div className="about-us__statistics-box">
                    <span className="about-us__statistics-box-title">
                      ۱۰۰
                      <span className="about-us__statistics-box-title-plus">
                        +
                      </span>
                    </span>
                    <span className="about-us__statistics-box-text">
                      خرید موفق توسط کاربران
                    </span>
                  </div>
                  <div className="about-us__statistics-box">
                    <span className="about-us__statistics-box-title">
                      ۱۰۰
                      <span className="about-us__statistics-box-title-plus">
                        +
                      </span>
                    </span>
                    <span className="about-us__statistics-box-text">
                      مشتری راضی و خوشحال
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-us__logo">
              <img
                src="/images/logo/logo.jpg"
                alt="logo"
                className="about-us__logo-img"
              />
            </div>
          </div>
        </div>
      </section>
      <Socials />
      <Footer />
    </>
  );
}
