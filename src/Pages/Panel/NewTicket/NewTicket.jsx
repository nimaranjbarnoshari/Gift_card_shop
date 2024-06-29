import React from "react";
import BackLink from "../Components/BackLink/BackLink";
import "./NewTicket.css";
export default function NewTicket() {
  return (
    <div className="panel-styles new-ticket">
      <BackLink to="/panel/tickets" />
      <h2>New Ticket</h2>
    </div>
  );
}
