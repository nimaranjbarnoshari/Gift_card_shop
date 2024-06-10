import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { PiBellRingingBold } from "react-icons/pi";
import { TiUserOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isShowMenu, setIsShowMenue] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-menu__wrapper">
          <div className="nav-menu__right">
            {/* mobile menu button */}
            <div className="nav-btn nav-btn__menu">
              <Link
                to="#"
                onClick={() => {
                  setIsShowMenue(!isShowMenu);
                }}
              >
                {isShowMenu ? (
                  <IoClose className="nav-icon" />
                ) : (
                  <BiMenuAltRight className="nav-icon" />
                )}
              </Link>
            </div>

            {/* mobile menu */}
            <div
              className={`nav-menu__list-mobile ${
                isShowMenu ? "show-nav" : ""
              }`}
            >
              <ul className="nav-menu__list-mobile-items">
                <li className="nav-menu__list-mobile-item nav-menu__list-mobile-item--active">
                  <Link className="nav-menu__list-mobile-link">صفحه اصلی</Link>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <Link className="nav-menu__list-mobile-link">
                    گیفت کارت ها
                  </Link>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <Link className="nav-menu__list-mobile-link">
                    لیست بازی ها
                  </Link>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <Link className="nav-menu__list-mobile-link">
                    پول و آیتم بازی
                  </Link>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <Link className="nav-menu__list-mobile-link">خدمات</Link>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <Link className="nav-menu__list-mobile-link">نرم افزار</Link>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <Link className="nav-menu__list-mobile-link">
                    کالای دیجیتال
                  </Link>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <Link className="nav-menu__list-mobile-link">بلاگ</Link>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <Link className="nav-menu__list-mobile-link">تماس با ما</Link>
                </li>
              </ul>
            </div>

            {/* tablet and laptop menu */}
            <div className="nav-menu__list">
              <ul className="nav-menu__list-items">
                <li className="nav-menu__list-item nav-menu__list-item--active">
                  <Link className="nav-menu__list-link">صفحه اصلی</Link>
                </li>
                <li className="nav-menu__list-item">
                  <Link className="nav-menu__list-link">گیفت کارت ها</Link>
                </li>
                <li className="nav-menu__list-item">
                  <Link className="nav-menu__list-link">لیست بازی ها</Link>
                </li>
                <li className="nav-menu__list-item">
                  <Link className="nav-menu__list-link">پول و آیتم بازی</Link>
                </li>
                <li className="nav-menu__list-item">
                  <Link className="nav-menu__list-link">خدمات</Link>
                </li>
                <li className="nav-menu__list-item">
                  <Link className="nav-menu__list-link">نرم افزار</Link>
                </li>
                <li className="nav-menu__list-item">
                  <Link className="nav-menu__list-link">کالای دیجیتال</Link>
                </li>
                <li className="nav-menu__list-item">
                  <Link className="nav-menu__list-link">بلاگ</Link>
                </li>
                <li className="nav-menu__list-item">
                  <Link className="nav-menu__list-link">تماس با ما</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-menu__left">
            <div className="nav-btn">
              <Link to="#" className="nav-link">
                <CgShoppingBag className="nav-icon" />
              </Link>
            </div>
            <div className="nav-btn">
              <Link to="#" className="nav-link nav-link__notification--wrapper">
                <PiBellRingingBold className="nav-icon" />
                <span className="nav-link__notification"></span>
              </Link>
            </div>
            <div className="nav-btn nav-btn__login">
              <Link to="#" className="nav-link">
                <span className="nav-link__text">ورود | عضویت</span>
                <TiUserOutline className="nav-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
