import React, { useState } from "react";
import black from "../img/OT Black.png";
import light from "../img/OT White.png";
import darkColors from "../consts/darkColors";
import "../App.css"

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        width: "5.5rem",
        height: "5.5rem",
        position: "absolute",
        borderRadius: "50%",
        overflow: "hidden",
        zIndex: 1,
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={black}
        alt="black"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "opacity 0.5s ease-in-out", // Geçiş efekti
          opacity: isHovered ? 0 : 1,
          zIndex: 1,
          transform: isHovered ? "rotate(180deg)" : "rotate(0deg)", // Fare üzerine geldiğinde 180 derece döndür
          animation: isHovered ? "spin 2s linear forwards" : "none", // Animasyonu etkinleştir
        }}
      />
      <img
        src={light}
        alt="light"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "opacity 0.5s ease-in-out", // Geçiş efekti
          opacity: isHovered ? 1 : 0,
          zIndex: 2,
          transform: isHovered ? "rotate(180deg)" : "rotate(360deg)", // Fare üzerine geldiğinde 180 derece döndür
          animation: isHovered ? "spin 1s linear forwards" : "none", // Animasyonu etkinleştir
          transition: "opacity 0.s ease-in-out", //
        }}
      />
    </div>
  );
};

export default Logo;
