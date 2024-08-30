import React, { useEffect, useState, useContext } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import Benefits from "../../Components/Benefits/Benefits";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import GameBox from "../../Components/GameBox/GameBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Flag from "../../Components/Flag/Flag";
import GiftBox from "../../Components/GiftBox/GiftBox";
import AuthContext from "../../Context/AuthContext";
import Accordion from "react-bootstrap/Accordion";

import "swiper/css";
import "swiper/css/pagination";
import "./GiftCards.css";

export default function GiftCards() {
  const contextData = useContext(AuthContext);
  const [allGifts, setAllGifts] = useState([]);
  const [categoryName, setCategoryName] = useState("apple");
  const [category, setCategory] = useState({});
  const [categoryGifts, setCategoryGifts] = useState([]);
  const [categoryRegions, setCategoryRegions] = useState([]);
  const [region, setRegion] = useState("");
  const [isActive, setIsActive] = useState("description");
  const [isRegionActive, setIsRegionActive] = useState("");
  const [allGames, setAllGames] = useState([]);

  const chooseCategory = (category) => {
    const selectedCategory = allGifts.filter(
      (gift) => gift.category === category
    );
    setCategory(selectedCategory[0]);
  };

  useEffect(() => {
    fetch("http://localhost:8000/gifts")
      .then((res) => res.json())
      .then((data) => setAllGifts(data));

    fetch("http://localhost:8000/games")
      .then((res) => res.json())
      .then((data) => setAllGames(data));
  }, []);

  useEffect(() => {
    chooseCategory(categoryName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allGifts, categoryName]);

  useEffect(() => {
    if (category?.giftCards) {
      setCategoryRegions(category.regions);
    }
  }, [category]);

  useEffect(() => {
    if (categoryRegions[0]?.country) {
      setRegion(categoryRegions[0].country);
    }
  }, [categoryRegions]);

  useEffect(() => {
    if (region) {
      const shownGiftCards = category.giftCards.filter(
        (gift) => gift.country === region
      );
      setCategoryGifts(shownGiftCards);
      setIsRegionActive(region);
    }
  }, [region, category]);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        {/* choose category */}
        <div className="gift-cards__category">
          <label htmlFor="giftsCategory" className="gift-cards__category-label">
            انتخاب گیفت کارت :
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
                  src={category?.src}
                  alt="giftCard"
                  className="gift-cards__header-top-img"
                />
              </div>
              <div className="gift-cards__header-bottom-img-container">
                <div className="gift-cards__header-bottom-img-box">
                  <img
                    className="gift-cards__header-bottom-img"
                    src={category?.src1}
                    alt="gift-cards__header-bottom-img-container"
                  />
                </div>
                <div className="gift-cards__header-bottom-img-box">
                  <img
                    className="gift-cards__header-bottom-img"
                    src={category?.src2}
                    alt="gift-cards__header-bottom-img-container"
                  />
                </div>
                <div className="gift-cards__header-bottom-img-box">
                  <img
                    className="gift-cards__header-bottom-img"
                    src={category?.src3}
                    alt="gift-cards__header-bottom-img-container"
                  />
                </div>
              </div>
            </div>
            <div className="gift-cards__header-infos">
              <div className="gift-cards__header-infos-top">
                <h3 className="gift-cards__header-infos-top-title">
                  {category ? category.title : ""}
                </h3>
                <Flag
                  title={`دسته بندی: ${category ? category.title : ""}`}
                  src="/images/svg/category.svg"
                />
              </div>
              <div className="gift-cards__header-infos-body">
                <h3 className="gift-cards__header-infos-body-title">
                  توضیحات کوتاه:
                </h3>
                <p className="gift-cards__header-infos-body-text">
                  {category ? category.description?.slice(0, 150) : ""}
                  {"..."}
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
                    {categoryRegions.map((region) => (
                      <Flag
                        key={region.id}
                        country={region.country}
                        src={region.flag}
                      />
                    ))}
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
                <button
                  className={
                    isActive === "description"
                      ? "gift-cards__infos-header-button gift-cards__infos-header-button--active"
                      : "gift-cards__infos-header-button"
                  }
                  onClick={() => setIsActive("description")}
                >
                  توضیحات
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button
                  className={
                    isActive === "Characteristics"
                      ? "gift-cards__infos-header-button gift-cards__infos-header-button--active"
                      : "gift-cards__infos-header-button"
                  }
                  onClick={() => setIsActive("Characteristics")}
                >
                  خصوصیات
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button
                  className={
                    isActive === "comments"
                      ? "gift-cards__infos-header-button gift-cards__infos-header-button--active"
                      : "gift-cards__infos-header-button"
                  }
                  onClick={() => setIsActive("comments")}
                >
                  نظرات
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button
                  className={
                    isActive === "usersQuestions"
                      ? "gift-cards__infos-header-button gift-cards__infos-header-button--active"
                      : "gift-cards__infos-header-button"
                  }
                  onClick={() => setIsActive("usersQuestions")}
                >
                  سوالات کاربران
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button
                  className={
                    isActive === "questions"
                      ? "gift-cards__infos-header-button gift-cards__infos-header-button--active"
                      : "gift-cards__infos-header-button"
                  }
                  onClick={() => setIsActive("questions")}
                >
                  سوالات متداول
                </button>
              </div>
              <div className="gift-cards__infos-header-box">
                <button
                  className={
                    isActive === "activation"
                      ? "gift-cards__infos-header-button gift-cards__infos-header-button--active"
                      : "gift-cards__infos-header-button"
                  }
                  onClick={() => setIsActive("activation")}
                >
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

              {category
                ? isActive === "description" && (
                    <p className="gift-cards__infos-text">
                      {category[isActive]}
                    </p>
                  )
                : ""}

              {category
                ? isActive === "Characteristics" &&
                  (category[isActive]
                    ? category[isActive].map((item, index) => (
                        <ul key={index + 1} className="gift-cards__infos-list">
                          <li className="gift-cards__infos-list-item">
                            {item}
                          </li>
                        </ul>
                      ))
                    : "")
                : ""}
              {category
                ? isActive === "comments" &&
                  (category[isActive].length ? (
                    category[isActive].map((item, index) => (
                      <ul key={index + 1} className="gift-cards__infos-list">
                        <li className="gift-cards__infos-list-item">{item}</li>
                      </ul>
                    ))
                  ) : (
                    <p className="gift-cards__infos-noComment">
                      هنوز هیچ نظری برای این گیفت کارت ثبت نشده است
                    </p>
                  ))
                : ""}
              {category
                ? isActive === "usersQuestions" &&
                  (category[isActive].length ? (
                    category[isActive].map((item, index) => (
                      <ul className="gift-cards__infos-list">
                        <li
                          key={index + 1}
                          className="gift-cards__infos-list-item"
                        >
                          {item}
                        </li>
                      </ul>
                    ))
                  ) : (
                    <p className="gift-cards__infos-noComment">
                      هنوز هیچ سوالی در مورد این گیفت کارت پرسیده نشده است
                    </p>
                  ))
                : ""}
              {category
                ? isActive === "questions" && (
                    <Accordion>
                      {category[isActive].map((question, index) => (
                        <Accordion.Item
                          key={question.id}
                          eventKey={index}
                          className="border-0"
                        >
                          <Accordion.Header>
                            {question.question}
                          </Accordion.Header>
                          <Accordion.Body>{question.answer}</Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  )
                : ""}
              {category
                ? isActive === "activation" &&
                  (category[isActive]
                    ? category[isActive].map((item, index) => (
                        <ul key={index + 1} className="gift-cards__infos-list">
                          <li className="gift-cards__infos-list-item">
                            {item}
                          </li>
                        </ul>
                      ))
                    : "")
                : ""}
            </div>
          </div>
        </div>

        {/* Choose gift card */}
        <div className="gift-cards__body">
          <SectionHeader title="انتخاب نوع گیفت کارت" />
          <div className="gift-cards__body-buttons">
            {categoryRegions.map((region) => (
              <button
                key={region.id}
                className="gift-cards__body-button"
                onClick={() => setRegion(region.country)}
              >
                <Flag
                  country={region.country}
                  src={region.flag}
                  custom={
                    isRegionActive === region.country
                      ? "gift-cards__body-flag--active"
                      : ""
                  }
                />
              </button>
            ))}
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
        <div className="gift-cards__other-products">
          <SectionHeader title="دیگر محصولات" />
          <Swiper
            modules={[Pagination, Autoplay]}
            // autoplay={true}
            pagination={{ type: "bullets", clickable: true }}
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
            {allGames.length
              ? allGames.slice(0,7).map((game) => (
                  <SwiperSlide key={game.id}>
                    <GameBox
                      clickHandler={() => contextData.addToBasket(game)}
                      src={game.src}
                      title={game.title}
                      price={game.price}
                      off={game.off}
                    />
                  </SwiperSlide>
                ))
              : ""}

            
          </Swiper>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
