import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

import "./Socials.css";

export default function Socials() {
  return (
    <div className="social">
      <div className="container">
        <div className="social__wrapper">
          <h3 className="social__title">
            مـارا در شــبکــه هــای اجـتــمــاعی دنــبــال کــنـــیـــد
          </h3>
          <div className="social__icons-wrapper">
            <Link to="#" className="social__icons-link">
              <AiOutlineYoutube className="social__icons-icon" />
            </Link>
            <Link to="#" className="social__icons-link">
              <CiTwitter className="social__icons-icon" />
            </Link>
            <Link to="#" className="social__icons-link">
              <IoLogoInstagram className="social__icons-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
