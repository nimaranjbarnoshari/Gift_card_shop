import React from "react";
import BackLink from "../Components/BackLink/BackLink";
import "./TicketDetails.css";
export default function TicketDetails() {
  return (
    <div className="panel-styles new-ticket">
      <BackLink to="/panel/tickets" />
      <h2>Ticket Details</h2>
    </div>
  );
}
