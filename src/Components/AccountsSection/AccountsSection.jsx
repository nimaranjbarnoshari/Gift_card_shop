import React, { useContext, useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import AccountBox from "../AccountBox/AccountBox";
import AuthContext from "../../Context/AuthContext";

import "./AccountsSection.css";
export default function AccountsSection() {
  const contextData = useContext(AuthContext);
  const [allAcconts, setAllAcounts] = useState([]);

  useEffect(() => {
    fetch(`${contextData.back_url}accounts`)
      .then((res) => res.json())
      .then((accounts) => setAllAcounts(accounts));
  }, [contextData]);
  return (
    <section className="accounts">
      <div className="container">
        <SectionHeader title="اکانت های دیجیتال" />

        <div className="acoounts-wrapper">
          {allAcconts.map((account) => (
            <AccountBox
              key={account.id}
              svg={true}
              src={account.src}
              title={account.title}
              desc={account.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
