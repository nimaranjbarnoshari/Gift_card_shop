import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import AccountBox from "../AccountBox/AccountBox";

import "./AccountsSection.css";

export default function AccountsSection() {
  const [allAcconts, setAllAcounts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/accounts")
      .then((res) => res.json())
      .then((accounts) => setAllAcounts(accounts));
  }, []);
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
