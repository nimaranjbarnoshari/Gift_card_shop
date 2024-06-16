import React from "react";

import "./BlogInfos.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Social/Social";
import Footer from "../../Components/Footer/Footer";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function BlogInfos() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="blog">
        <div className="container">
          <div className="blog-container">
            <div className="blog__button-container">
              <Link to="/blogs" className="blog-infos__button">
                <TiArrowBack className="blog-infos__button-icon" />
                بازگشت
              </Link>
            </div>
            <div className="blog-infos">
              <div className="blog-infos__header">
                <h2 className="blog-infos__header-title">
                  انتظار ها به پایان رسید! انتشار بازی BattleField Mobile در
                  اوایل مهرماه!
                </h2>
              </div>
              <div className="blog-infos__body">
                <div className="blog-infos__body-img-container">
                  <img
                  className="blog-infos__body-img"
                    src="/images/articles/battlefield.jpg"
                    alt="blogs_info_img"
                  />
                </div>
                <div className="blog-infos__body-text-container">
                  <p className="blog-infos__body-text">
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
                  <p className="blog-infos__body-text">
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
                <div className="blog-infos__body-footer">
                  <div className="blog-infos__body-footer-right">
                    <span className="blog-infos__body-footer-date-container">
                      نوشته شده در تاریخ: 
                      <span className="blog-infos__body-footer-date">۱۴ آبان ۱۴۰۲</span>  
                    </span>
                  </div>
                  <div className="blog-infos__body-footer-left">
                    <span className="blog-infos__body-footer-tag">
                      بازی کامپیوتر
                    </span>
                    <span className="blog-infos__body-footer-tag">بتلفیلد</span>
                    <span className="blog-infos__body-footer-tag">
                      بازی اکشن
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-writer"></div>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
