// HeroHeader.js
import React from "react";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import colors from "../consts/colors";

const HeroHeader = () => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 2%, ${colors.platinum} 40%)`,
        color: colors.black,
        height: "90%",
        width: "80%",
        borderTopColor: colors.platinum,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
                zIndex: 100,

        boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Navbar />
    </div>
  );
};

export default HeroHeader;
