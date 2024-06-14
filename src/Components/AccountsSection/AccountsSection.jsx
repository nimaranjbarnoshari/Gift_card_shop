import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import AccountBox from "../AccountBox/AccountBox";

import "./AccountsSection.css";

export default function AccountsSection() {
  return (
    <section className="accounts">
      <div className="container">
        <SectionHeader title="اکانت های دیجیتال" />

        <div className="acoounts-wrapper">
          <AccountBox
            svg={true}
            src="/images/accounts/spotify.svg"
            title="اکانت اسپاتیفای پاندورا"
            desc="Spotify"
          />

          <AccountBox
            svg={true}
            src="/images/accounts/google.svg"
            title="اکانت گوگل پلی"
            desc="Google Play"
          />

          <AccountBox
            svg={true}
            src="/images/accounts/origin.svg"
            title="اکانت اوریجین"
            desc="Origin"
          />

          <AccountBox
            svg={true}
            src="/images/accounts/amazon.svg"
            title="اکانت آمازون"
            desc="Amazon"
          />

          <AccountBox
            svg={true}
            src="/images/accounts/netflix.svg"
            title="اکانت نتفلیکس"
            desc="Netflix"
          />

          <AccountBox
            svg={true}
            src="/images/accounts/itunes.svg"
            title="اکانت آیتیونز"
            desc="itunes"
          />

          <AccountBox
            svg={true}
            src="/images/accounts/battle.svg"
            title="اکانت بتل نت"
            desc="Battle net"
          />

          <AccountBox
            svg={true}
            src="/images/accounts/razor.svg"
            title="اکانت ریزر گلد ریکستی"
            desc="Razor gold"
          />

          <AccountBox
            svg={true}
            className="accounts-box"
            src="/images/accounts/nintendo.svg"
            title="اکانت نینتندو سویچ"
            desc="Nintendo"
          />
        </div>
      </div>
    </section>
  );
}
