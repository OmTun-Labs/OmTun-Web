import React from "react";
import HeroHeader from "../components/HeroHeader";
import Navbar from "../components/Navbar";
import colors from "../consts/colors";
import mounth from "../img/mounth.png";
import { Box } from "@mui/material";
import HeroBody from "../components/HeroBody";
import HeroBodyEnd from "../components/HeroBodyEnd";

const LandingPage = () => {
  return (
<div>
  <HeroHeader />
      <HeroBody />
      <HeroBodyEnd/>
      

</div>
   
  );
};

export default LandingPage;
