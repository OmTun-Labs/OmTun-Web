import { Button, IconButton, Paper, Typography, } from "@mui/material";
import React, { useState } from "react";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import Fingerprint from "@mui/icons-material/Fingerprint";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
const BodyPaper = ({ img, text, link, linkgit }) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * 20; // Rotate by up to 30 degrees in Y axis
    const rotateY = (x - 0.5) * -20; // Rotate by up to 30 degrees in X axis

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
      transition: "transform 0.5s ease", // Smoothly return to original state
    });
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

      <Typography
        variant="h4"
        style={{
          fontFamily: "Lora",
          color: colors.black,
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor:"white",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          width: "80%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {text}
      </Typography>

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
          style={{ width: "40%", opacity: 0.8 }}
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
            justifyContents: "center",
            alignItems: "center",
            display: "flex",
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
    </Paper>
  );
};

export default BodyPaper;
