import React from "react";
import HeroHeader from "../components/HeroHeader";
import Navbar from "../components/Navbar";
import colors from "../consts/colors";
import mounth from "../img/mounth.png";
import { Box } from "@mui/material";
import HeroBody from "../components/HeroBody";
import HeroBodyEnd from "../components/HeroBodyEnd";
import Body from "../components/Body";

const LandingPage = () => {
  return (
<div>
  <HeroHeader />
      <HeroBody />
      <HeroBodyEnd />
      <Body/>
      

</div>
   
  );
};

export default LandingPage;
