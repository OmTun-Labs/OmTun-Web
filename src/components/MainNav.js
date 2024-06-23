import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const MainNav = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "space-between", // Logo ve Navbar arasına boşluk bırakmak için
        width: "80%", // Genişlik ayarı
        maxWidth: 1200, // Maksimum genişlik
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 100,
        padding: "0 1rem", // Padding ekledik
        boxSizing: "border-box", // Box-sizing düzeltmesi
      }}
    >
      <Logo />
      <Navbar />
    </div>
  );
};

export default MainNav;
