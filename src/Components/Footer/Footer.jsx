import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

import "./Footer.css";
export default function Footer() {
  const [allGamesData, setAllGamesData] = useState([]);
  const [allaccounts, setAllaccounts] = useState([]);
  const [giftsCategory, setGiftsCategory] = useState([]);
  const [allGifts, setAllGifts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then((res) => res.json())
      .then((data) => setAllGamesData(data));
    fetch("http://localhost:8000/accounts")
      .then((res) => res.json())
      .then((data) => setAllaccounts(data));
    fetch("http://localhost:8000/gifts")
      .then((res) => res.json())
      .then((data) => setGiftsCategory(data));
  }, []);

  useEffect(() => {
    const giftCards = [];
    giftsCategory.forEach((gift) => {
      gift.giftCards.forEach((eachGift, index) => {
        if (index <= 1) {
          giftCards.push(eachGift);
        }
      });
    });
    setAllGifts(giftCards);
  }, [giftsCategory]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-infos">
            <div className="footer-infos__logo-wrapper">
              <img
                src="/images/logo/logo.png"
                alt="footer_logo_img"
                className="footer-infos__logo-img"
              />
            </div>

            <div className="footer-infos__phone-wrapper">
              <FiPhone className="footer-infos__phone-icon" />
              <h5 className="footer-infos__phone-number">۰۹۱۲۵۲۴۴۱۵۴</h5>
            </div>

            <div className="footer-infos__location-wrapper">
              <CiLocationOn className="footer-infos__location-icon" />
              <h5 className="footer-infos__location-number">
                کرج - خیابان فلان - کوچه فلان
              </h5>
            </div>

            <div className="footer-newsletter">
              <SectionHeader title="عضویت در خبرنامه" footer={true} />
              <div className="footer-newsletter__input-wrapper">
                <input
                  type="text"
                  placeholder="آدرس ایمیل شما ..."
                  className="footer-newsletter__input"
                />
                <button className="footer-newsletter__button">ارسال</button>
              </div>
            </div>
          </div>

          <div className="footer-lists">
            <div className="footer-lists__wrapper">
              <SectionHeader title="بازی ها" footer={true} />
              <ul className="footer-lists__items">
                {allGamesData.length
                  ? allGamesData.slice(0, 7).map((game) => (
                      <li key={game.id} className="footer-lists__item">
                        <Link to="#" className="footer-lists__link">
                          {game.title}
                        </Link>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="footer-lists__wrapper">
              <SectionHeader title="گیفت کارت ها" footer={true} />
              <ul className="footer-lists__items">
                {allGifts.length
                  ? allGifts.slice(0, 7).map((gift) => (
                      <li key={gift.id} className="footer-lists__item">
                        <Link to="#" className="footer-lists__link">
                          {gift.title}
                        </Link>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="footer-lists__wrapper">
              <SectionHeader title="خدمات و اکانت ها" footer={true} />
              <ul className="footer-lists__items">
                {allaccounts.length
                  ? allaccounts.slice(0, 7).map((account) => (
                      <li key={account.id} className="footer-lists__item">
                        <Link to="#" className="footer-lists__link">
                          {account.title}
                        </Link>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
          </div>

          <div className="footer-socials">
            <div className="footer-symbols__wrapper">
              <SectionHeader title="نماد ها" footer={true} />
              <div className="footer-symbols">
                <Link to="#">
                  <img
                    src="/images/logo/enamad.jpg"
                    alt="footer_symbol"
                    className="footer-symbols__img"
                  />
                </Link>
                <Link to="#">
                  <img
                    src="/images/logo/zarin.jpg"
                    alt="footer_symbol"
                    className="footer-symbols__img"
                  />
                </Link>
              </div>
            </div>

            <div className="footer-contacts__wrapper">
              <SectionHeader title="ارتباط با ما" footer={true} />
              <div className="footer-socials__wrapper">
                <Link to="#" className="fotter-socials__link">
                  <FaWhatsapp className="footer-socials__icon" />
                </Link>
                <Link to="#" className="fotter-socials__link">
                  <AiOutlineYoutube className="footer-socials__icon" />
                </Link>
                <Link to="#" className="fotter-socials__link">
                  <FiTwitter className="footer-socials__icon" />
                </Link>
                <Link to="#" className="fotter-socials__link">
                  <FaInstagram className="footer-socials__icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyRight">
          <span className="footer-copyRight__text">
            تمام حقوق این وب سایت متعلق به فلان میباشد.
          </span>
        </div>
      </div>
    </footer>
  );
}
