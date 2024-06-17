import React from "react";
import { Typography, Button } from "@mui/material";

const HeroBody = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        eleifend venenatis dolor, vitae fringilla dolor ultricies non.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </div>
  );
};

export default HeroBody;
