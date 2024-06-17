import React from "react";
import HeroHeader from "../components/HeroHeader";
import Navbar from "../components/Navbar";
import colors from "../consts/colors";
import mounth from "../img/mounth.png";
import { Box } from "@mui/material";
import HeroBody from "../components/HeroBody";

const LandingPage = () => {
  return (
    <Box
      sx={{
        //  backgroundImage: `url(${mounth})`,
        //  backgroundPositionY: "0px",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundImage: `linear-gradient(to top, rgba(155, 255, 155, 0.7), transparent)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <HeroHeader />
      <HeroBody/>
    </Box>
  );
};

export default LandingPage;
