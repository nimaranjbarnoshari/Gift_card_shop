import React from "react";
import BackLink from "../Components/BackLink/BackLink";
import TicketBox from "../Components/TicketBox/TicketBox";
import "./TicketDetails.css";
export default function TicketDetails() {
  return (
    <div className="panel-styles ticket-details">
      <BackLink to="/panel/tickets" />
      <h2 className="ticket-details__header">جزئیات تیکت</h2>
      <div className="ticket-details__boxes">
        <div className="ticket-details__boxes-header">
          <p className="ticket-details__boxes-title">#۱۱۴۰۲۱۰۰۹۰۰۴۲</p>
        </div>
        <div className="ticket-details__boxes-body">
          <TicketBox
            title="سروش محمدی"
            src="/images/user/user1.jpg"
            date="۱۴۰۲/۰۷/۰۵  ۱۶:۴۲"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
            طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
            قرار گیرد.
          </TicketBox>
          <TicketBox
            title="ادمین سایت"
            src="/images/user/admin.jpg"
            date="۱۴۰۲/۰۷/۰۶  ۱۰:۴۲"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز
            است.
          </TicketBox>
        </div>
      </div>
    </div>
  );
}
