import React, { useEffect, useState, useContext } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import Benefits from "../../Components/Benefits/Benefits";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import GameBox from "../../Components/GameBox/GameBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Flag from "../../Components/Flag/Flag";
import GiftBox from "../../Components/GiftBox/GiftBox";
import AuthContext from "../../Context/AuthContext";

import "./GiftCards.css";

export default function GiftCards() {
  const contextData = useContext(AuthContext);
  const [allGifts, setAllGifts] = useState([]);
  const [categoryName, setCategoryName] = useState("apple");
  const [category, setCategory] = useState([]);
  const [categoryGifts, setCategoryGifts] = useState([]);

  const chooseCategory = (category) => {
    const chosenCategory = allGifts.filter(
      (gift) => gift.category === category
    );
    setCategoryGifts(chosenCategory);
  };

  useEffect(() => {
    fetch("http://localhost:8000/gifts")
      .then((res) => res.json())
      .then((data) => setAllGifts(data));

    fetch("http://localhost:8000/giftCategories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    console.log(category);
  }, [category]);

  useEffect(() => {
    chooseCategory(categoryName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allGifts]);

  useEffect(() => {
    chooseCategory(categoryName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        {/* choose category */}
        <div>
          <label htmlFor="giftsCategory" className="gift-cards__category-label">
            انتخاب دسته بندی :
          </label>
          <select
            name=""
            id="giftsCategory"
            className="gift-cards__category-select"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          >
            <option value="apple" className="gift-cards__category-option">
              گیفت کارت اپل
            </option>
            <option value="steam" className="gift-cards__category-option">
              گیفت کارت استیم
            </option>
            <option value="amazon" className="gift-cards__category-option">
              گیفت کارت آمازون
            </option>
            <option value="google" className="gift-cards__category-option">
              گیفت کارت گوگل پلی
            </option>
            <option value="netflix" className="gift-cards__category-option">
              گیفت کارت نتفلیکس
            </option>
          </select>
        </div>
        {/* Gifts and explanaions */}
        <div className="gift-cards__header-container">
          <div className="gift-cards__header">
            <div className="gift-cards__header-img-container">
              <div className="gift-cards__header-top-img-box">
                <img
                  src="/images/gifts/apple.jpg"
                  alt="giftCard"
                  className="gift-cards__header-top-img"
                />
              </div>
              <div className="gift-cards__header-bottom-img-container">
                <div className="gift-cards__header-bottom-img-box">
                  <img
                    className="gift-cards__header-bottom-img"
                    src="/images/gifts/apple1.jpg"
                    alt="gift-cards__header-bottom-img-container"
                  />
                </div>
                <div className="gift-cards__header-bottom-img-box">
                  <img
                    className="gift-cards__header-bottom-img"
                    src="/images/gifts/apple2.jpg"
                    alt="gift-cards__header-bottom-img-container"
                  />
                </div>
                <div className="gift-cards__header-bottom-img-box">
                  <img
                    className="gift-cards__header-bottom-img"
                    src="/images/gifts/apple3.jpg"
                    alt="gift-cards__header-bottom-img-container"
                  />
                </div>
              </div>
            </div>
            <div className="gift-cards__header-infos">
              <div className="gift-cards__header-infos-top">
                <h3 className="gift-cards__header-infos-top-title">
                  گیفت کارت اپل
                </h3>
                <Flag
                  title="دسته بندی: گیفت کارت اپل"
                  src="/images/svg/category.svg"
                />
              </div>
              <div className="gift-cards__header-infos-body">
                <h3 className="gift-cards__header-infos-body-title">
                  توضیحات کوتاه:
                </h3>
                <p className="gift-cards__header-infos-body-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
              <div className="gift-cards__header-infos-bottom">
                <h3 className="gift-cards__header-infos-bottom-title">
                  ویژگی ها:
                </h3>
                <div className="gift-cards__header-infos-bottom-flags">
                  <div className="gift-cards__header-infos-bottom-flags-container">
                    <img
                      src="/images/svg/region.svg"
                      alt="region"
                      className="gift-cards__header-infos-bottom-flags-icon"
                    />
                    <span className="gift-cards__header-infos-bottom-flags-title">
                      ریجن های موجود:
                    </span>
                  </div>
                  <div className="gift-cards__header-infos-bottom-flag-boxes">
                    <Flag country="برزیل" src="/images/svg/brazil.svg" />
                    <Flag country="انگلیس" src="/images/svg/england.svg" />
                    <Flag country="ترکیه" src="/images/svg/turkey.svg" />
                    <Flag country="فرانسه" src="/images/svg/france.svg" />
                    <Flag country="ایتالیا" src="/images/svg/italy.svg" />
                    <Flag country="آمریکا" src="/images/svg/usa.svg" />
                  </div>
                </div>
                <div className="gift-cards__header-infos-bottom-send">
                  <div className="gift-cards__header-infos-bottom-send-container">
                    <img
                      src="/images/svg/clock-w.svg"
                      alt="region"
                      className="gift-cards__header-infos-bottom-send-icon"
                    />
                    <span className="gift-cards__header-infos-bottom-send-title">
                      مدت زمان ارسال اکانت:
                    </span>
                  </div>
                  <span className="gift-cards__header-infos-bottom-send-text">
                    تا 24 ساعت بعد از ثبت سفارش
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="gift-cards__infos">
            <div className="gift-cards__infos-header">
              <div className="gift-cards__infos-header-box">
                <button className="gift-cards__infos-header-button gift-cards__infos-header-button--active">
                  توضیحات
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button className="gift-cards__infos-header-button">
                  خصوصیات
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button className="gift-cards__infos-header-button">
                  نظرات
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button className="gift-cards__infos-header-button">
                  سوالات کاربران
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button className="gift-cards__infos-header-button">
                  سوالات متداول
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button className="gift-cards__infos-header-button">
                  فعال سازی
                </button>
              </div>
            </div>
            <div className="gift-cards__infos-body">
              <img
                src="/images/background/bg3.jpeg"
                alt="text_bg"
                className="gift-cards__infos-body-img"
              />
              <p className="gift-cards__infos-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>

        {/* Choose gift card */}
        <div className="gift-cards__body">
          <SectionHeader title="انتخاب نوع گیفت کارت" />
          <div className="gift-cards__body-buttons">
            <button className="gift-cards__body-button">
              <Flag country="برزیل" src="/images/svg/brazil.svg" />
            </button>
            <button className="gift-cards__body-button">
              <Flag country="انگلیس" src="/images/svg/england.svg" />
            </button>
            <button className="gift-cards__body-button">
              <Flag country="ترکیه" src="/images/svg/turkey.svg" />
            </button>
            <button className="gift-cards__body-button">
              <Flag country="فرانسه" src="/images/svg/france.svg" />
            </button>
            <button className="gift-cards__body-button">
              <Flag country="ایتالیا" src="/images/svg/italy.svg" />
            </button>
            <button className="gift-cards__body-button">
              <Flag country="آمریکا" src="/images/svg/usa.svg" />
            </button>
          </div>
          <div className="gift-cards__body-cards">
            {categoryGifts.map((gift) => (
              <GiftBox
                key={gift.id}
                flagSrc={gift.flag}
                country={gift.country}
                src={gift.icon}
                title={gift.title}
                price={
                  gift.off
                    ? gift.price - (gift.price * gift.off) / 100
                    : gift.price
                }
                clickHandler={() => contextData.addToBasket(gift)}
              />
            ))}
          </div>
        </div>

        {/* Pay & Help sections*/}
        <div className="gift-cards__footer">
          <div className="gift-cards__footer-help">
            <div className="gift-cards__footer-help-header">
              <img
                src="/images/svg/help.svg"
                alt="help_svg"
                className="gift-cards__footer-help-icon"
              />
              <h3 className="gift-cards__footer-help-title">راهنما</h3>
            </div>
            <div className="gift-cards__footer-help-body">
              <ul className="gift-cards__footer-help-list">
                <li className="gift-cards__footer-help-list-item">
                  کلیه کارت های بانکی عضو شبکه شتاب برای تمامی بانک ها امکان
                  پرداخت دارند.
                </li>
                <li className="gift-cards__footer-help-list-item">
                  این وبسایت دارای نماد اعتماد الکترونیکی از وزارت بازرگانی می
                  باشد.
                </li>
                <li className="gift-cards__footer-help-list-item">
                  همکاران محترم جهت دریافت پنل همکاری با ما تماس حاصل فرمایید.
                </li>
                <li className="gift-cards__footer-help-list-item">
                  قیمت کالاها در این وبسایت نسبت به میزان خرید شما متغیر می
                  باشد.
                </li>
                <li className="gift-cards__footer-help-list-item">
                  تایید تلفن همراه و تلفن ثابت در این وبسایت الزامی میباشد.
                </li>
                <li className="gift-cards__footer-help-list-item">
                  خواهشمند است در انتخاب کالا دقت فرمایید؛ کد تحویل داده شده
                  تعویض ویا مرجوع نمی گردد.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Benefits background={false} />
      {/* Other products section */}
      <div className="container">
        <div className="gift-products">
          <SectionHeader title="دیگر محصولات" />
          <Swiper
            // autoplay={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <GameBox
                src="/images/home/fifa24.jpg"
                title="بازی فیفا ۲۴ (پیش خرید)"
                price="۲۵۶،۰۰۰"
              />
            </SwiperSlide>

            <SwiperSlide>
              <GameBox
                src="/images/home/jedi.jpg"
                title="بازی JEDI Survivor"
                price="۱،۱۸۰،۰۰۰"
              />
            </SwiperSlide>

            <SwiperSlide>
              <GameBox
                src="/images/home/deadspace.jpg"
                title="بازی Dead Space"
                price="۶،۴۹۰،۰۰۰"
              />
            </SwiperSlide>

            <SwiperSlide>
              <GameBox
                src="/images/home/warfar.jpg"
                title="بازی Modern Warfare 2"
                price="۳،۲۴۵،۰۰۰"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
