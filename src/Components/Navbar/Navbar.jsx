import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { TiUserOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import AuthContext from "../../Context/AuthContext";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [isShowMenu, setIsShowMenue] = useState(false);
  const [menus, setMenus] = useState([]);
  const contextData = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8000/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

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
                {menus.map((menu) => (
                  <li key={menu.id} className="nav-menu__list-mobile-item">
                    <NavLink
                      to={menu.link}
                      className={({ isActive }) =>
                        isActive
                          ? "nav-menu__list-mobile-link nav-menu__list-mobile-link--active"
                          : "nav-menu__list-mobile-link"
                      }
                    >
                      {menu.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* tablet and laptop menu */}
            <div className="nav-menu__list">
              <ul className="nav-menu__list-items">
                {menus.map((menu) => (
                  <li key={menu.id} className="nav-menu__list-item">
                    <NavLink
                      to={menu.link}
                      className={({ isActive }) =>
                        isActive
                          ? "nav-menu__list-link nav-menu__list-link--active"
                          : "nav-menu__list-link"
                      }
                    >
                      {menu.title}
                    </NavLink>
                  </li>
                ))}
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
            {/* <div className="nav-btn">
              <Link to="#" className="nav-link nav-link__notification--wrapper">
                <PiBellRingingBold className="nav-icon" />
                <span className="nav-link__notification"></span>
              </Link>
            </div> */}
            <div className="nav-btn nav-btn__login">
              {contextData.isLoggedIn ? (
                <Link to="/panel" className="nav-link">
                  <span className="nav-link__text-user">پنل کاربری</span>
                </Link>
              ) : (
                <Link to="/login" className="nav-link">
                  <span className="nav-link__text">ورود | عضویت</span>
                  <TiUserOutline className="nav-icon" />
                </Link>
              )}
            </div>
            {contextData.isLoggedIn ? (
              <div className="nav-btn">
                <button
                  className="panel-topbar__logout-button"
                  onClick={() => contextData.logout()}
                >
                  <FiLogOut className="panel-topbar__logout-icon" />
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
