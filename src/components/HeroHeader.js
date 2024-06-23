import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import colors from "../consts/colors";
import DividerNav from "./DividerNav";
import Logo from "./Logo";
import ImageCarosell from "./ImageCarosell";
import MainNav from "./MainNav";

const HeroHeader = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  // Dinamik olarak header yüksekliğini al
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <div
      ref={headerRef}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255, 155, 255, 0.8), transparent)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 2%, ${colors.platinum} 40%)`,
          color: colors.black,
          height: "90vh", // Header boyutu %90 viewport yüksekliği
          width: "80%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginTop: 20,
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.15)",
          margin: "auto",
          position: "relative",
          overflow: "hidden",
          padding: 10,
          
        }}
      >
        <MainNav/>

        <div style={{position: "absolute", width: "100%", height: "100%",alignItems: "center",overflow: "hidden" }}>
          <ImageCarosell />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
