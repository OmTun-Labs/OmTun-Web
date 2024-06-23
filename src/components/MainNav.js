import React from 'react'
import Logo from './Logo';
import Navbar from './Navbar';

const MainNav = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 40,
        alignItems: "center",
        width: "100%",
        zIndex: 100,
        marginLeft:"10%",
      }}
    >
      <Logo />
      <Navbar />
    </div>
  );
}

export default MainNav