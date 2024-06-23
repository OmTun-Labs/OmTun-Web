import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import colors from "../consts/colors";

const ConstSlider = () => {
  const [centerCardZIndex, setCenterCardZIndex] = useState(100);
  const [leftCardZIndex, setLeftCardZIndex] = useState(90);
  const [rightCardZIndex, setRightCardZIndex] = useState(90);
  const bg = colors.black; // Assuming colors.black is defined in your colors constant file

  const bringToFront = (card) => {
    if (card === "left") {
      setLeftCardZIndex(100);
      setCenterCardZIndex(90);
      setRightCardZIndex(90);
    } else if (card === "right") {
      setRightCardZIndex(100);
      setCenterCardZIndex(90);
      setLeftCardZIndex(90);
    } else {
      setCenterCardZIndex(100);
      setLeftCardZIndex(90);
      setRightCardZIndex(90);
    }
  };

  return (
    <div
      style={{
        padding: 20,
        marginTop: 20,
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: bg, // Apply the background color here
      }}
    >
      <div
        style={{
          width: "70%",
          height: "70%",
          position: "absolute",
          backgroundColor: bg,
          borderRadius: 20,
          top: "-10%",
          left: "15%",
          zIndex: centerCardZIndex,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          transition: "z-index 0.3s ease-in-out",
        }}
      >
        {/* Content of the first central div */}
     
      </div>

      <div
        style={{
          width: "40%", // Adjusted width for the left side div
          height: "60%",
          position: "absolute",
          backgroundColor: bg,
          borderRadius: 20,
          top: "-5%",
          left: "10%", // Adjusted left position for the left side div
          zIndex: leftCardZIndex,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          transition: "z-index 0.3s ease-in-out",
        }}
      >
        {/* Content of the left side div */}

      </div>

      <div
        style={{
          width: "40%", // Adjusted width for the right side div
          height: "60%",
          position: "absolute",
          backgroundColor: bg,
          borderRadius: 20,
          top: "-5%",
          right: "10%", // Adjusted right position for the right side div
          zIndex: rightCardZIndex,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          transition: "z-index 0.3s ease-in-out",
        }}
      >
        {/* Content of the right side div */}

      </div>

      <div
        style={{
          width: "40%",
          height: "50%",
          position: "absolute",
          backgroundColor: bg,
          borderRadius: 20,
          top: "0%",
          left: "5%",
          zIndex: 80,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Content of the left div inside left card */}
        
      </div>

      <div
        style={{
          width: "40%",
          height: "50%",
          position: "absolute",
          backgroundColor: bg,
          borderRadius: 20,
          top: "0%",
          right: "5%",
          zIndex: 80,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Content of the right div inside right card */}

      </div>
    </div>
  );
};

export default ConstSlider;
