import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
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
                <li className="nav-menu__list-mobile-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                        : "nav-menu__list-mobile-link"
                    }
                  >
                    صفحه اصلی
                  </NavLink>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <NavLink
                    to="/gifts"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                        : "nav-menu__list-mobile-link"
                    }
                  >
                    گیفت کارت ها
                  </NavLink>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <NavLink
                    to="/games"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                        : "nav-menu__list-mobile-link"
                    }
                  >
                    لیست بازی ها
                  </NavLink>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <NavLink
                    to="/money"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                        : "nav-menu__list-mobile-link"
                    }
                  >
                    پول و آیتم بازی
                  </NavLink>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                        : "nav-menu__list-mobile-link"
                    }
                  >
                    خدمات
                  </NavLink>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <NavLink
                    to="/softwares"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                        : "nav-menu__list-mobile-link"
                    }
                  >
                    نرم افزار
                  </NavLink>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                        : "nav-menu__list-mobile-link"
                    }
                  >
                    بلاگ
                  </NavLink>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                        : "nav-menu__list-mobile-link"
                    }
                  >
                    درباره ما
                  </NavLink>
                </li>
                <li className="nav-menu__list-mobile-item">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                        : "nav-menu__list-mobile-link"
                    }
                  >
                    تماس با ما
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* tablet and laptop menu */}
            <div className="nav-menu__list">
              <ul className="nav-menu__list-items">
                <li className="nav-menu__list-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-link nav-menu__list-link--active"
                        : "nav-menu__list-link"
                    }
                  >
                    صفحه اصلی
                  </NavLink>
                </li>
                <li className="nav-menu__list-item">
                  <NavLink
                    to="/gifts"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-link nav-menu__list-link--active"
                        : "nav-menu__list-link"
                    }
                  >
                    گیفت کارت ها
                  </NavLink>
                </li>
                <li className="nav-menu__list-item">
                  <NavLink
                    to="/games"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-link nav-menu__list-link--active"
                        : "nav-menu__list-link"
                    }
                  >
                    لیست بازی ها
                  </NavLink>
                </li>
                <li className="nav-menu__list-item">
                  <NavLink
                    to="/money"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-link nav-menu__list-link--active"
                        : "nav-menu__list-link"
                    }
                  >
                    پول و آیتم بازی
                  </NavLink>
                </li>
                <li className="nav-menu__list-item">
                  <NavLink
                    to="/Services"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-link nav-menu__list-link--active"
                        : "nav-menu__list-link"
                    }
                  >
                    خدمات
                  </NavLink>
                </li>
                <li className="nav-menu__list-item">
                  <NavLink
                    to="/softwares"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-link nav-menu__list-link--active"
                        : "nav-menu__list-link"
                    }
                  >
                    نرم افزار
                  </NavLink>
                </li>
                <li className="nav-menu__list-item">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-link nav-menu__list-link--active"
                        : "nav-menu__list-link"
                    }
                  >
                    بلاگ
                  </NavLink>
                </li>
                <li className="nav-menu__list-item">
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-link nav-menu__list-link--active"
                        : "nav-menu__list-link"
                    }
                  >
                    درباره ما
                  </NavLink>
                </li>
                <li className="nav-menu__list-item">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-menu__list-link nav-menu__list-link--active"
                        : "nav-menu__list-link"
                    }
                  >
                    تماس با ما
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-menu__left">
            <div className="nav-btn">
              <NavLink
                to="/carts"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
              >
                <CgShoppingBag className="nav-icon" />
              </NavLink>
            </div>
            <div className="nav-btn">
              <Link to="#" className="nav-link nav-link__notification--wrapper">
                <PiBellRingingBold className="nav-icon" />
                <span className="nav-link__notification"></span>
              </Link>
            </div>
            <div className="nav-btn nav-btn__login">
              <Link to="/login" className="nav-link">
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
