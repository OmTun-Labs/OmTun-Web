import React from "react";
import HeroHeader from "../components/HeroHeader";
import Navbar from "../components/Navbar";
import colors from "../consts/colors";
import mounth from "../img/mounth.png";
import { Box } from "@mui/material";
import HeroBody from "../components/HeroBody";
import HeroBodyEnd from "../components/HeroBodyEnd";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Social from "../components/Social";

const LandingPage = () => {
  return (
    <div>
     
        <Social/>
  <HeroHeader />
      <HeroBody />
      <HeroBodyEnd />
      <Body />
      <Footer/>
      

</div>
   
  );
};

export default LandingPage;
