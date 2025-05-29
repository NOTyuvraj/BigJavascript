import React from "react";
import "./BodyPart.css";
import { Disease } from "./Disease";
// import tailwindcss from "@tailwindcss/vite";

export const BodyPart = ({bodyPart}) => {
  return (
    <div className="body-div">
      <input id="body-btn" type="checkbox" className="body-btn"/>
      <label htmlFor="body-btn">{bodyPart}</label>
    </div>
  );
};
