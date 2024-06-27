import React from "react";
import "./Chip.css";
export default function Chip({ children, bg, custom }) {
  const renderStyle = (exp) => {
    switch (exp) {
      case "green":
        return "chip-green";
      case "orange":
        return "chip-orange";
      case "pink":
        return "chip-pink";
      default:
        return "chip-gray";
    }
  };
  return <span className={`chip ${renderStyle(bg)} ${custom ? custom : ""}`}>{children}</span>;
}
