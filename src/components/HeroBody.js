import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import colors from "../consts/colors";
import ConstSlider from "./ConstSlider";
import darkColors from "../consts/darkColors";

const HeroBody = () => {


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "110vh",
        position: "relative",
        backgroundColor: darkColors.white,
      }}
    >
      <ConstSlider />
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          width: "70%",
          height: "20%",
          backgroundColor: darkColors.white,
          borderRadius: 20,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          transition: "z-index 0.3s ease-in-out",
          bottom: "10%",
        }}
      ></div>
    </div>
  );
};

export default HeroBody;
