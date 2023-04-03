import { useState } from "react";
import agam from "./agam.png";
import top from "./top.svg";
import left from "./left.svg";

export default function Page3() {
  return (
    <>
      <div id="about-title">
        <p className="about-title-text">About me</p>
      </div>
      <p className="about-description">
        I am a second year <span style={{ color: "red" }}>CSD</span> Student at{" "}
        <span style={{ textDecoration: "underline" }}>IIITD</span>.
      </p>
      <p className="about-description">
        I have a knack for solving problems and creating good designs that
        inspire and help others.
      </p>
      <div id="about-photo">
        <img src={agam} alt="agam" />
      </div>
      <div id="about-footer">
        <img
          src={top}
          alt="top"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            objectPosition: "center bottom",
            transform: "rotateZ(180deg)",
          }}
        />
      </div>
      <img
        src={left}
        alt="left"
        style={{
          position: "absolute",
          left: 30,
          top: "calc(30% - 160px)",
          width: "24px",
          height: "320px",
        }}
      />
    </>
  );
}
