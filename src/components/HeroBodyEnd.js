
import React from 'react'
import colors from '../consts/colors';
import { Typography } from '@mui/material';
import SubWebPages from './SubWebPages';

const HeroBodyEnd = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        marginTop: "-5rem",
        
      }}
    >
          <h1 style={{
              fontFamily:"Lora",
              color: colors.black,
              textAlign: "center",
              fontSize: "3rem",
              paddingTop: "5rem",

          }}>
          </h1>
          <SubWebPages/>
    </div>
  );
}

export default HeroBodyEnd