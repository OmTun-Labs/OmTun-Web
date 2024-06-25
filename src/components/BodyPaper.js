import React, { useState } from "react";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import Fingerprint from "@mui/icons-material/Fingerprint";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import RateDiv from "./Rating";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";

const rateValues = [4.2, 4.5, 4.9, 5.0];

const BodyPaper = ({ img, text, link, linkgit,desc }) => {
  const [style, setStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * 20; // Rotate by up to 20 degrees in Y axis
    const rotateY = (x - 0.5) * -20; // Rotate by up to 20 degrees in X axis

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
      transition: "transform 0.5s ease", // Smoothly return to original state
    });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <Paper
      elevation={3}
      style={{
        boxShadow: "0 1px 6px 1px rgba(220, 220, 220, .6)",
        fontFamily: "Poppins",
        height: "70vh", // Fixed height for consistent appearance
        width: "100%", // Full width within its container
        color: colors.black,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.5s ease",
        borderRadius: "1rem",
        transformStyle: "preserve-3d", // Preserve 3D transformation
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <img
        src={img}
        alt="img"
        style={{
          width: "100%",
          height: "90%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      <div
        style={{
          fontFamily: "Poppins",
          color: colors.black,
          position: "absolute",
          top: 10,
          right: 0,
          padding: "5px 10px",
          backgroundColor: colors.platinum,
          minWidth: "30%",
          height: "5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${colors.grey}`, // Border rengi ve kalınlığı
          boxShadow: "0px 4px 8px rgba(120, 120, 120, 0.9)", // Box shadow
          fontSize: "1.1rem", // Font boyutu
        }}
      >
        <h3
          style={{
            fontFamily: "Poppins",
            textAlign: "start",
            fontWeight: 500,
            margin: 0, // H3 içeriğinin kenar boşluğunu sıfırla
          }}
        >
          {text}
        </h3>
      </div>

      <div
        style={{
          width: "100%",
          height: "10%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: 1,
          position: "absolute",
          bottom: 0,
          left: 0,
          fontFamily: "Poppins",
        }}
      >
        <Button
          style={{ width: "40%", height: "60%", opacity: 0.8 }}
          color="secondary"
          variant="contained"
          endIcon={<ArrowOutward />}
          href={link}
        >
          Siteyi Göster
        </Button>

        <div
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: colors.mor,
            width: "50%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: "1rem",
            gap: "3rem",
          }}
        >
          <IconButton
            aria-label="fingerprint"
            color="secondary"
            style={{ width: "40px", height: "40px" }}
            href={linkgit}
          >
            <Fingerprint />
          </IconButton>
          <div
            style={{
              fontSize: "1.5rem",
              marginLeft: "-2rem",
              fontFamily: "Poppins",
            }}
          >
            Kaynak Kod
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RateDiv defaultValue={rateValues[0]} precision={0.1} />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: isHovered ? "20%" : "10%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: isHovered ? 1 : 0,
          transition: "bottom 0.5s ease, opacity 0.5s ease",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        <Typography
          variant="h6"
          p={3}
          component="div"
          style={{ textAlign: "center", fontFamily: "Poppins",fontWeight:"300" }}
          
        >
         {desc}
        </Typography>
      </div>
    </Paper>
  );
};

export default BodyPaper;
