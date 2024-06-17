import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: colors.green,
          },
          warning: {
            main: colors.yellow,
          },
          success: {
            main: colors.platinum,
          },
        },
      })}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "center", minHeight: "64px" }}>
          <Box
            sx={{
              width: "60%",
              height: "60px",
              mx: "auto",
              bgcolor: darkColors.black,
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "48px",
                mx: "auto",
                bgcolor: darkColors.black,
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                variant="fullWidth"
                textColor="inherit"
                sx={{
                  "& .MuiTabs-flexContainer": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                  },
                  "& .MuiTab-root": {
                    minHeight: "38px", // Yeni boyut
                    minWidth: "40px",
                    color: colors.platinum, // Tüm tabların metin rengi
                    borderRadius: 2,
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  },
                  "& .Mui-selected": {
                    color: colors.platinum, // Seçilen tabın metin rengi
                    backgroundColor: darkColors.green, // Seçilen tabın arka plan rengi
                    opacity: 0.9,
                    transition: "0.9s",
                    "& svg": {
                      color: colors.green, // Seçilen tabın sembol rengi
                    },
                  },
                }}
              >
                <Tab icon={<HomeRoundedIcon />} label="Home" />
                <Tab icon={<FavoriteBorderIcon />} label="Likes" />
                <Tab icon={<SearchIcon />} label="Search" />
                <Tab icon={<PersonIcon />} label="Profile" />
              </Tabs>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
